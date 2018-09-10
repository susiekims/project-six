import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class PetCard extends Component {
    //
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.pet.name,
            breed: this.props.pet.breed,
            sex: this.props.pet.sex,
            photo: this.props.pet.photo,
            id: this.props.pet.id
        }
    }

    render() {
        return(
            <div className="pet-card">
                <h2>{this.state.name}</h2>
                <img src={this.state.photo} alt={`${this.state.name} the ${this.state.breed}`}/>
                <Link to={`/pet/${this.props.pet.id}`}>
                    READ MOAR
                </Link>
                <p>{this.state.breed}</p>
                
                <p>{this.state.sex}</p>
            </div>
        )
    }
}

export default PetCard;