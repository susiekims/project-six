import React, { Component } from 'react';

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
                <p>{this.state.breed}</p>
                <p>{this.state.sex}</p>
            </div>
        )
    }
}

export default PetCard;