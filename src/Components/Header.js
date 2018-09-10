import React, { Component } from 'react';
import SearchForm from './SearchForm';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            loggedIn: false, 
            // redirect: this.props.redirect,
        }
    }

    componentDidUpdate(oldProps){
        if (this.state.loggedIn === false && this.props.user !== null){
            this.setState({user: this.props.user,
                loggedIn: true  
            });
        }
    }

    render() {
        return (
           <header>
               <Link exact to='/'>Critter</Link>
               {
                   this.props.user
                   ? <button onClick={this.props.logout}>Log Out</button> 
                   : <button onClick={this.props.login}>Log In</button>
               }
               {
                   this.props.user && <Link to='/faves'>Fave Pets</Link>
               }
               <SearchForm location={this.props.location} breeds={this.props.breeds} getPets={this.props.getPets}/>
           </header>
        )
    }
}

export default Header;