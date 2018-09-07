import React, { Component } from 'react';
import './App.css';
import Landing from './Components/Landing';
import axios from 'axios';
import Qs from 'qs';
import ResultPage from './Components/ResultPage';
import SinglePet from './Components/SinglePet';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import userLocation from './userLocation';
import config from './firebase';
import firebase from 'firebase';

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

class App extends Component {
    constructor() {
        super();
        this.state = {
            user: null,
            pets: [],
            breeds: {
                reptile: [],
                smallfurry: [],
                bird: []
            },
            location: null,
            faves: []
        }
    }

    componentDidMount() {

        userLocation().then((loc) => {
            console.log(loc);
            this.setState({
                location: loc
            })
        });

        const getBreeds = (animal) => {
            axios({
                url: 'https://proxy.hackeryou.com',
                method: 'GET',
                dataResponse: 'json',
                paramsSerializer: function (params) {
                    return Qs.stringify(params, {
                    arrayFormat: 'brackets'
                    })
                },
                params: {
                    reqUrl: 'https://api.petfinder.com/breed.list',
                    params: {
                        key: '729776b0ff12f97426ef03d015026841',
                        format: 'json',
                        output: 'full',
                        animal: animal,
                    },
                    xmlToJSON: false
                }
            }).then(res => {
                let breeds = res.data.petfinder.breeds.breed.map(breed => {
                    return breed.$t;
                }) ;
                this.setState({
                    breeds: {
                        ...this.state.breeds,
                        [animal]: breeds
                    }
                })
            })    
        }
        getBreeds('reptile');
        getBreeds('smallfurry');
        getBreeds('bird');

        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({user}, () => {
                    this.dbRef = firebase.database().ref(this.state.user.uid);

                    this.dbRef.on('value', (snapshot) => {
                        if(snapshot.val()){
                            this.setState({
                                faves: snapshot.val().faves 
                            })
                        }
                    })
                })
            }
        })
    }

    logout = () => {
        auth.signOut().then(()=> {
            this.setState({
                user: null
            });
            this.dbRef.off();
        })
    }

    login = () => {
        console.log('login yo!');
        auth.signInWithPopup(provider).then(res => {
            this.setState({user: res.user})
        });
    }

    addToFaves = (pet) => {
        console.log('this is my fav pet:', pet);
        // this.dbRef.push(pet);
        firebase.database().ref(`${this.state.user.uid}/faves`).push(pet);
    }


    getPets = (location, type, age, sex, breed) => {
        console.log(location, type, age, sex, breed);
        this.setState({
            pets: []
        })
        axios({
            url: 'https://proxy.hackeryou.com',
            method: 'GET',
            dataResponse: 'json',
            paramsSerializer: function (params) {
                return Qs.stringify(params, {
                arrayFormat: 'brackets'
                })
            },
            params: {
                reqUrl: 'https://api.petfinder.com/pet.find',
                params: {
                key: '729776b0ff12f97426ef03d015026841',
                format: 'json',
                output: 'full',
                location: location,
                animal: type,
                age: age,
                count: 100,
                sex: sex,
                breed: breed
                },
                proxyHeaders: {
                'header_params': 'value'
                },
                xmlToJSON: false
            }
        }).then((res) => {
            if(res.data.petfinder.pets.pet) {
                let petsArray = Object.values(res.data.petfinder.pets)
                if (petsArray[0].length) {
                    let pets = petsArray[0].filter((pet) => {
                        return pet.media.photos
                    });
                    if (pets.length === 0){
                        alert('it is 0')
                    }
                    this.setState({pets});
                } else if(petsArray[0].media.photos){
                    let pet = [ petsArray[0] ]; 
                    this.setState({
                        pets: pet
                    })
                } else {
                    alert('NO PET PHOTKA');
                }
            }
            else {alert('no pets SAAAAWRY')}; 
        })
    }
    
    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path="/" render={(props) => (
                        this.state.pets.length === 0 ?
                        <Landing {...props} user={this.state.user} login={this.login} logout={this.logout} breeds={this.state.breeds} getPets={this.getPets} location={this.state.location}/>
                        :
                        <Redirect to="/results" />
                    )}/>
                    {/* <Route path="/pet/:pet_id" component={SinglePet} /> */}

                    <Route path="/pet/:pet_id" render={(props) => (
                        <SinglePet {...props} addToFaves={this.addToFaves} user={this.state.user} login={this.login} />
                    )} />


                    <Route path="/results" render={() => (
                        <ResultPage user={this.state.user}  login={this.login} logout={this.logout} pets={this.state.pets} location={this.state.location} breeds={this.state.breeds} getPets={this.getPets}/>
                    )} />
                </div>
            </Router>
        );
    }
}

export default App;
