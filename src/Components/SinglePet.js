import React, { Component } from 'react';
import axios from 'axios';
import Qs from 'qs';

class singlePets extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            breed: '',
            sex: '',
            photo: '',
            description: ''
        }
    }
    componentDidMount(){
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
                    reqUrl: 'https://api.petfinder.com/pet.get',
                    params: {
                        key: '729776b0ff12f97426ef03d015026841',
                        format: 'json',
                        output: 'full',
                        id: this.props.match.params.pet_id,
                    },
                    xmlToJSON: false
                }
            }).then(res => {
                console.log(res.data.petfinder.pet);
                let petInfo = res.data.petfinder.pet
                this.setState({
                    name: petInfo.name.$t,
                    breed: petInfo.breeds.breed.$t,
                    sex: petInfo.sex.$t,
                    photo: petInfo.media.photos.photo[2].$t,
                    description: petInfo.description.$t
                })
                console.log(this.state)
            })    
    }

    render() {
        return (
            <div className="singlePets">
                <h1>{this.state.name}</h1>
                <img src={this.state.photo} alt={`a photo of ${this.state.name}`}/>
                <h3>{this.state.breed}</h3>
                <h3>{this.state.sex}</h3>
                <p>{this.state.description}</p>
                <a href="mailto: ?body=Check out this cute pet!,&subject=cute pet">Send to a Friend</a>
            </div>
        )
    }
}

export default singlePets;