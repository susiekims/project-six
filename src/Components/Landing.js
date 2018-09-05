import React, { Component } from 'react';
import SearchForm from './SearchForm';

class Landing extends Component {
    render() {
        return (
            <div className="landing-page">
                <h1>CRITTER</h1>
                <h2>Find your creepy companion</h2>
                <SearchForm getPets={this.props.getPets}/>
            </div>
        )
    }
}

export default Landing;