import React, { Component } from 'react';
import SearchForm from './SearchForm';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            loggedIn: false, 
        }
    }

    componentDidUpdate(oldProps){
        console.log(this.props.user);
        if (this.state.loggedIn === false && this.props.user !== null){
            this.setState({user: this.props.user,
                loggedIn: true  
            });
        }
    }

    render() {
        return (
           <header>
               {
                   this.props.user
                   ? <button onClick={this.props.logout}>Log Out</button>
                   : <button onClick={this.props.login}>Log In</button>
               }
               <SearchForm location={this.props.location} breeds={this.props.breeds} getPets={this.props.getPets}/>
           </header>
        )
    }
}

export default Header;