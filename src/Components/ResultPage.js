import React, { Component } from 'react';
import PetCard from './PetCard';
import Header from './Header';


class ResultPage extends Component {

    render() {

        return (
            <div className="result-page">

            <Header startLoader={this.startLoader} user={this.props.user} login={this.props.login} logout={this.props.logout} location={this.props.location} breeds={this.props.breeds} getPets={this.props.getPets} />
                <div className="wrapper-results clearfix">
                    {
                        this.props.pets.length === 0 &&  <img src={require("./loader.gif")} className="loader" />    
                    }
    
                    {
                        this.props.pets.map((pet) => {
                            return <PetCard user={this.props.user} login={this.props.login} logout={this.props.logout} pet={pet}/>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ResultPage;