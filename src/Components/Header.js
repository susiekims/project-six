import React, { Component } from 'react';
import SearchForm from './SearchForm';

class Header extends Component {
    render() {
        return (
           <header>
               <SearchForm location={this.props.location} breeds={this.props.breeds} getPets={this.props.getPets}/>
           </header>
        )
    }
}

export default Header;