import React, { Component } from 'react';
import PetCard from './PetCard';
// import SearchForm from './SearchForm';
import Header from './Header';

import config from '../firebase';
import firebase from 'firebase';

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();


class ResultPage extends Component {
    render() {
        return (
            <div className="result-page">

            <Header user={this.props.user} login={this.props.login} logout={this.props.logout} location={this.props.location} breeds={this.props.breeds} getPets={this.props.getPets} />
            {
                this.props.pets.map((pet) => {
                    return <PetCard user={this.props.user} login={this.props.login} logout={this.props.logout} pet={pet}/>
                })
            }
            </div>
        )
    }
}

export default ResultPage;