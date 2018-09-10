import React, { Component } from 'react';
import SearchForm from './SearchForm';

class Landing extends Component {
    render() {
        return (
            <div className="landing-page">
                <header>
                {
                    this.props.user
                    ? <button onClick={this.props.logout}>Log Out</button> 
                    : <button onClick={this.props.login}>Log In</button>
                }   
                </header>
                <h1>CRITTER</h1>
                <h2>Alternative Pets for Alternative People</h2>

                <SearchForm location={this.props.location} breeds={this.props.breeds} getPets={this.props.getPets}/>
                <h3>How It Works</h3>
                <p>You're not just anyone. You're you. And you need a pet that's as unique as you. Welcome to CRITTER, where you can find the perfect adoptable pet in your area thats NOT a boring ol' dog or cat.</p>
               <ul>
                   <li>Step One: Make an account! You don't need an account if you just want to browse, but if you want to save the pet to your faves you're going to need an account!</li>
                   <li>Step Two: Search for pets! Enter your location or allow your browser to detect your location</li>
                   <li>Step three: Share the links to your pets with your friends or add them to your faves so you can go back to them later!</li>
               </ul>
            </div>
        )
    }
}

export default Landing;