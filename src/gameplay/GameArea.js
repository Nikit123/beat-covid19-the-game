import React, { Component } from 'react';
import globe from '../content/globe.png';
import CovidCell from './CovidCell.js';
import lab from '../content/lab.png';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default class GameArea extends Component {

    state = {
        covidCells: [],
        gameStart: false,
        welcomeModal: false,
        noEscapeModal: false,
        vaccineProgress: 0,
        vaccineAvailable: false,
        doomsDayCounter: 0,
        gameOver: false
    }

    componentDidMount = () => {
        this.setState({ welcomeModal: true });
    }

    createCorona = () => {
        var covidCells = [];
        for (var i = 0; i < 10; i++) {
            covidCells.push(<CovidCell
                idProp={i.toString()}
                increaseInfection={this.increaseInfection}
            />);
        }
        this.setState({ covidCells });
    }

    updateVaccineProgress = () => {
        var progress = this.state.vaccineProgress;
        progress += 2;
        this.setState({ vaccineProgress: progress });
        if (progress >= 100) {
            this.setState({ vaccineAvailable: true });
        }
    }

    increaseInfection = () => {
        var infection = this.state.doomsDayCounter;
        infection++;
        if (infection >= 3)
            this.setState({ gameOver: true })
        this.setState({ doomsDayCounter: infection });
    }

    startGame = () => {
        this.setState({ welcomeModal: false });
        this.createCorona();
    }

    render() {
        return (
            <>
                {this.state.welcomeModal &&
                    <Modal
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                        show={this.state.welcomeModal}>
                        <Modal.Header >
                            <Modal.Title>Beat Covid-19 (The Game)</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Welcome!
                            This is a simple mini game, where you are a doctor/scientist who tries to protect Earth from deadly covid-19 virus while trying to develop a vaccine at the same time.
                            Defend Earth by bouncing back covid virus cells, also try to visit the lab and research vaccine by clicking. Try to develop vaccine before 3 cells infect earth.
                            The fate of human race is in your hands!
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => { this.setState({ noEscapeModal: true }); }}>
                                Maybe later?
                            </Button>
                            <Button variant="primary" onClick={() => { this.startGame(); }}>Save the World!</Button>
                        </Modal.Footer>
                    </Modal>
                }
                {this.state.noEscapeModal &&
                    <Modal show={this.state.noEscapeModal}>
                        <Modal.Header >
                            <Modal.Title>Are you kidding?</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            We understand you clicked that button by mistake. Get back now.
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={() => { this.setState({ noEscapeModal: false }) }}>Sorry, take me back.</Button>
                        </Modal.Footer>
                    </Modal>
                }
                {!this.state.vaccineAvailable ? this.state.covidCells :
                    <Modal show={this.state.vaccineAvailable}>
                        <Modal.Header >
                            <Modal.Title>We did it!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            You managed to develop a vaccine in time. Humanity is saved!
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={() => { window.location.reload(); }}>Wohoo!</Button>
                        </Modal.Footer>
                    </Modal>
                }
                {this.state.gameOver &&
                    <Modal show={this.state.gameOver}>
                        <Modal.Header >
                            <Modal.Title>Oops!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Earth has been devastated by Covid-19.
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={() => { window.location.reload(); }} > Please, let me start again.</Button>
                        </Modal.Footer>
                    </Modal>
                }
                <figure className="Earth">
                    <figcaption style={{ color: "cornflowerblue" }}>Lives left : {3 - this.state.doomsDayCounter}</figcaption>
                    <img src={globe} style={{ height: "15vmin" }} alt="Earth" />
                </figure>
                <figure className="Lab">
                    <figcaption style={{ color: "cornflowerblue" }}>Vaccine progress : {this.state.vaccineProgress} % </figcaption>
                    <img src={lab} alt="Lab" style={{ height: "25vmin" }} onClick={() => { this.updateVaccineProgress() }} />
                </figure>
            </>
        )
    }
}