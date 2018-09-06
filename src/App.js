import React, { Component } from 'react';
import './App.css';
import Landing from './Components/Landing';
import axios from 'axios';
import Qs from 'qs';

class App extends Component {
    getPets = (location, type, age) => {
        // return (
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
                  },
                  proxyHeaders: {
                    'header_params': 'value'
                  },
                  xmlToJSON: false
                }
            }).then((res) => {
                console.log(res.data.petfinder.pets);
            })
        // )
    }
    
    render() {
        return (
            <div className="App">
                <Landing getPets={this.getPets}/>
            </div>
        );
    }
}

export default App;
