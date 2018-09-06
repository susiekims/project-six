import React, { Component } from 'react';

class SearchForm extends Component {
    constructor() {
        super();
        this.state = {
            location: '',
            type: '',
            age: '',
            sex: '',
            breed: ''
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
        let sex = this.state.sex;
        this.props.getPets(location, type, age, sex);
    }

    render() {
        return (
            <form action="" onSubmit={this.handleSubmit}>
                <input type="text" id="location" placeholder="Enter City and Province" onChange={this.handleChange}/>
                <select name="types" id="type" onChange={this.handleChange}>
                    <option value="" selected disabled hidden>Choose type</option>
                    <option value="reptile">Reptile</option>
                    <option value="smallfurry">Small and Furry</option>
                    <option value="bird">Flying Friends</option>
                </select>
                <select name="" id="breed" onChange={this.handleChange}>
                    <option value=" ">Any breed</option>
                    {
                        this.state.type === "reptile" && this.props.breeds.reptile.map((breed) => {
                            return <option value={breed}>{breed}</option>
                        })
                    }
                    {
                        this.state.type === "smallfurry" && this.props.breeds.smallfurry.map((breed) => {
                            return <option value={breed}>{breed}</option>
                        })
                    }
                    {
                        this.state.type === "bird" && this.props.breeds.bird.map((breed) => {
                            return <option value={breed}>{breed}</option>
                        })
                    }
                </select>
                <select name="" id="age" onChange={this.handleChange}>
                    <option value=" ">Any Age</option>
                    <option value="Baby">Lil Bebes</option>
                    <option value="Young">Youngins</option>
                    <option value="Adult">Grown ups</option>
                    <option value="Senior">Wrinkly boys</option>
                </select>
                <select name="" id="sex" onChange={this.handleChange}>
                    <option value=" ">Any Sex</option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                </select>
                <input type="submit" value="FIND YO PET"/>
            </form>
        )
    }
}

export default SearchForm;