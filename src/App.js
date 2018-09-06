import React, { Component } from 'react';
import './App.css';
import Landing from './Components/Landing';
import axios from 'axios';
import Qs from 'qs';
import ResultPage from './Components/ResultPage';

class App extends Component {
    constructor() {
        super();
        this.state = {
            pets: [],
            breeds: {
                reptile: [],
                smallfurry: [],
                bird: []
            }
        }
    }

    componentDidMount() {
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
                    proxyHeaders: {
                    'header_params': 'value'
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
    }


    getPets = (location, type, age, sex) => {
        console.log(location, type, age);
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
                },
                proxyHeaders: {
                'header_params': 'value'
                },
                xmlToJSON: false
            }
        }).then((res) => {
            let petsArray = Object.entries(res.data.petfinder.pets)
            let pets = petsArray[0][1].filter((pet) => {
                return pet.media.photos
            });
            console.log(pets);
            this.setState({pets});
            // first filter this array for pets that have pics, then set state
        })
    }
    
    render() {

        return (
            <div className="App">
                <Landing getPets={this.getPets}/>
                <ResultPage pets={this.state.pets}/>
            </div>
        );
    }
}

export default App;
