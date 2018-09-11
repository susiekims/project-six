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
            id: this.props.pet.id,
            age: this.props.pet.age
        }
    }

    render() {
        return(
            <div className="pet-card box">
                <h3 className="pet-name">{this.state.name}</h3>
                <div className="pet-photo" style={{backgroundImage: `url(${this.state.photo})`}}></div>
                <div className="pet-card-description">
                    <p className="pet-breed">Breed: {this.state.breed}</p>
                    <p className="pet-sex">Sex: {this.state.sex}</p>
                    <Link className="link button" to={`/pet/${this.props.pet.id}`}>
                        Read More
                    </Link> 
            
                </div>
            </div>
        )
    }
}

export default PetCard;