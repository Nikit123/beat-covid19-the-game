import React, { Component } from 'react';
import Proptypes from 'prop-types';
import moving_covid from '../content/moving_covid.png';

export default class CovidCell extends Component {


    state = {
        cellDetails: {
            x: 0,
            y: 0,
            vectorX: 0,
            vectorY: 0
        }
    }

    bounce = () => {
        var cell = this.state.cellDetails;
        cell.vectorX = -1;
        cell.vectorY = -1;
        this.setState({ cellDetails: cell });
    }

    updateCell = () => {
        var cell = this.state.cellDetails;
        cell.x = cell.x + cell.vectorX;
        cell.y = cell.y + cell.vectorY;
        this.setState({ cellDetails: cell });
    }

    generateCell = () => {
        var widthMin = Math.ceil(0);
        var heightMin = Math.ceil(document.getElementsByClassName('Header')[0].clientHeight);
        var widthMax = Math.floor(document.getElementsByClassName('Game-body')[0].clientWidth);
        var heightMax = Math.floor(document.getElementsByClassName('Game-body')[0].clientHeight);
        var xCord = Math.floor(Math.random() * (widthMax - widthMin + 1) + widthMin);
        var yCord = Math.floor(Math.random() * (heightMax - heightMin + 1) + heightMin);
        var dirX = Math.floor((Math.random() * 3) - 1);
        var dirY = Math.floor((Math.random() * 3) - 1);
        var cell = {
            x: xCord,
            y: yCord,
            vectorX: dirX,
            vectorY: dirY
        }
        return cell;
    }

    isCollideWithEarth = (cell) => {
        var b = document.getElementsByClassName('Earth')[0];
        return !(
            (cell.x < (b.offsetLeft - (b.clientWidth / 2))) ||
            (cell.y < (b.offsetTop - (b.clientHeight / 2))) ||
            (cell.x > (b.offsetLeft + (b.clientWidth / 2))) ||
            (cell.y > (b.offsetTop + (b.clientHeight / 2)))
        );
    }

    componentDidMount = () => {
        var cell = this.generateCell();
        this.setState({ cellDetails: cell });
    }


    componentDidUpdate = () => {
        var playArea = document.getElementsByClassName('Game-body')[0];
        var cell = this.state.cellDetails;
        if (cell.x < 0 && cell.vectorX != 1)
            cell.vectorX = 1;
        if (cell.x > playArea.clientWidth && cell.vectorX != -1)
            cell.vectorX = -1;
        if (cell.y < document.getElementsByClassName('Header')[0].clientHeight && cell.vectorY != 1)
            cell.vectorY = 1;
        if (cell.y > playArea.clientHeight && cell.vectorY != -1)
            cell.vectorY = -1;
        if (this.isCollideWithEarth(cell)) {
            cell.vectorX = 0;
            cell.vectorY = 0;
        }
        if (cell != this.state.cellDetails)
            this.setState({ cellDetails: cell });
        window.requestAnimationFrame(this.updateCell);
    }

    render() {
        var cell = this.state.cellDetails;
        return <img
            src={moving_covid}
            className="Cell"
            id={this.props.idProp}
            onMouseOver={() => { this.bounce(); }}
            style={{ left: cell.x.toString() + "px", top: cell.y.toString() + "px" }} />
    }
}