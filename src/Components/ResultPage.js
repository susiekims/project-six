import React, { Component } from 'react';
import PetCard from './PetCard';

class ResultPage extends Component {
    render() {
        return (
            <div className="result-page">
            {
                this.props.pets.map((pet) => {
                    return <PetCard pet={pet}/>
                })
            }
            </div>
        )
    }
}

export default ResultPage;