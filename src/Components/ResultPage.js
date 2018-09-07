import React, { Component } from 'react';
import PetCard from './PetCard';
import SearchForm from './SearchForm';

class ResultPage extends Component {
    render() {
        return (
            <div className="result-page">
            <header>
                <SearchForm breeds={this.props.breeds} getPets={this.props.getPets} />
            </header>
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