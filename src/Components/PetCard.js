import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class PetCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.pet.name.$t,
            breed: this.props.pet.breeds.breed.$t,
            sex: this.props.pet.sex.$t,
            photo: this.props.pet.media.photos.photo[2].$t
        }
    }

    render() {
        return(
            <div className="pet-card">
                <h2>{this.state.name}</h2>
                <img src={this.state.photo} />
                <Link to={`/pet/${this.props.pet.id.$t}`}>
                    READ MOAR
                </Link>
                <p>{this.state.breed}</p>
                
                <p>{this.state.sex}</p>
            </div>
        )
    }
}

export default PetCard;