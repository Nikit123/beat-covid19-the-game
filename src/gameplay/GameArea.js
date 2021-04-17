import React, { Component } from 'react';
import globe from '../content/globe.png';
import CovidCell from './CovidCell.js';

export default class GameArea extends Component {

    state = {
        covidCells: []
    }

    componentDidMount = () => {
        var covidCells = [];
        for (var i = 0; i < 5; i++) {
            covidCells.push(<CovidCell
                idProp={i.toString()}
            />);
        }
        this.setState({ covidCells });
    }

    render() {
        return (
            <>
                {this.state.covidCells}
                <img src={globe} className="Earth" />
            </>
        )
    }
}