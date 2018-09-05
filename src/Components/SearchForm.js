import React, { Component } from 'react';

class SearchForm extends Component {
    constructor() {
        super();
        this.state = {
            location: '',
            type: '',
            age: ''

        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        console.log('submitted');
        e.preventDefault();
        let location = this.state.location;
        let type = this.state.type;
        let age = this.state.age;
        if (location.length > 0 && type.length > 0 && age.length > 0) {
            this.props.getPets(location, type, age);
        } else {
            alert('FILL OUT THE FORM!!');
        }
    }

    render() {
        return (
            <form action="" onSubmit={this.handleSubmit}>
                <input type="text" id="location" placeholder="Enter City and Province" onChange={this.handleChange}/>
                <select name="types" id="type" onChange={this.handleChange}>
                    <option value="" selected disabled hidden>Type</option>
                    <option value="reptile">Reptile</option>
                    <option value="smallfurry">Small and Furry</option>
                    <option value="bird">Flying Friends</option>
                </select>
                <select name="" id="age" onChange={this.handleChange}>
                    <option value="" selected disabled hidden>Age</option>
                    <option value="Baby">Lil Bebes</option>
                    <option value="Young">Youngins</option>
                    <option value="Adult">Grown ups</option>
                    <option value="Senior">Wrinkly boys</option>
                </select>
                <input type="submit" value="FIND YO PET"/>
            </form>
        )
    }
}

export default SearchForm;