import React, { Component } from 'react';
import SearchForm from './SearchForm';
import { Link } from 'react-router-dom';

class Landing extends Component {
    render() {
        return (
            <div className="landing-page">
                <header className="landing-header">
                {
                    this.props.user
                    ? <button className="button" onClick={this.props.logout}>Log Out</button> 
                    : <button className="button" onClick={this.props.login}>Log In</button>
                } 
                  {
                    this.props.user && <Link className="link button header-button" to='/faves'>Faves</Link>
                }  
                </header>

        <div className="wrapper-landing"> 
                <div className="landing-title">
                    <img src={require("./critter-logo.png")} className="landing-logo" />
                    <img src={require("./glitter-background.gif")} className="glitter" />

                    {/* <h2 className="landing-tagline">Alternative Pets for Alternative People</h2> */}
                </div>

            <div className="welcome-container clearfix">  
                <div className="welcome box">
                    <h3>welcome<i class="fas fa-times"></i></h3>
                    <p>You're not just anyone. You're you. And you need a pet that's as unique as you. Welcome to CRITTER, where you can find the perfect adoptable pet in your area thats NOT a boring ol' dog or cat.</p>
                </div>
                <div className="instruction box">
                    <h3>how it works<i class="fas fa-times"></i></h3>
                    <ul>
                        <li>Step One: Make an account! You don't need an account if you just want to browse, but if you want to save the pet to your faves you're going to need an account!</li>
                        <li>Step Two: Search for pets! Enter your location or allow your browser to detect your location</li>
                        <li>Step three: Share the links to your pets with your friends or add them to your faves so you can go back to them later!</li>
                    </ul>
                </div>  
            </div>

                <div className="landing-search-form box clearfix">
                    <h3>search critters<i class="fas fa-times"></i></h3>
                    <SearchForm location={this.props.location} breeds={this.props.breeds} getPets={this.props.getPets}/>
                </div>
            </div>

        </div>       
        )
    }
}

export default Landing;