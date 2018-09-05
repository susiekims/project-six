import React, { Component } from 'react';

class Landing extends Component {
    render() {
        return (
            <form action="">
                <input type="text" placeholder="enter location"/>
                <select name="" id="">
                    <option value="">Reptiles</option>
                    <option value="">Small furries</option>
                    <option value="">Fish</option>
                    <option value="">Birds</option>
                    <option value="">Other</option>
                </select>
                <select name="" id="">
                    <option value="">Baby</option>
                    <option value="">Juvenile</option>
                    <option value="">Senior</option>
                </select>
                <input type="submit" value="FIND YO PET"/>
            </form>
        )
    }
}

export default SearchForm;