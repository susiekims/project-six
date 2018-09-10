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
            <div className="pet-card box">
                <h2 className="pet-name">{this.state.name}</h2>
                <img className="pet-photo" src={this.state.photo} alt={`${this.state.name} the ${this.state.breed}`}/>
                <Link className="link button" to={`/pet/${this.props.pet.id}`}>
                    Read More
                </Link>
                <p className="pet-breed">{this.state.breed}</p>
                
                <p className="pet-sex">{this.state.sex}</p> 
            </div>
        )
    }
}

export default PetCard;