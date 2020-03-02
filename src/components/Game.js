import '../styles/Game.css';
import React, { Component } from 'react';
import Lifebar from './Lifebar'
import Scorebar from './Scorebar';
import Scoreboard from './Scoreboard';
import Sky from './Sky';
import StartMenu from './StartMenu';
import TRex from './TRex.js';


class Game extends Component {
    gameState = {
        START_MENU: 0,
        RUNNING: 1,
        SCOREBOARD: 2,
    }

    constructor(props) {
        super(props)
        this.state = {
            game: this.gameState.START_MENU,
            lives: 3,   
            scene: <StartMenu />,
            score: 0
        }
    }

    handleClick = () => {
        switch(this.state.game) {
            case this.gameState.START_MENU:
            case this.gameState.SCOREBOARD:
                // start or restart the game
                this.startGame();
                break;
            case this.gameState.RUNNING:
            default:
                // do nothing
                break;
        }
    }

    startGame = () => {
        this.setState({
            game: this.gameState.RUNNING,
            lives: 3,
            scene: 
            (<>
                <Sky />
                <Scorebar score={this.state.score}/>
                <Lifebar lives={this.state.lives}/>
                <TRex onHit={this.trexHit} onEscaped={this.trexEscaped}/>
            </>),
            score: 0,
        })
    }

    trexHit = () => {
        this.setState({
            score: this.state.score + 1000,
        })
    }

    trexEscaped = () => {
        this.setState({
            lives: this.state.lives - 1,
        })

        if (0 === this.state.lives) {
            this.setState({
                game: this.gameState.SCOREBOARD,
                scene: <Scoreboard score={this.state.score} />,
            })
        }
    }

    render() {
        return (
            <div className="scene" onClick={this.handleClick}>
                {this.state.scene}
                <div className="floor"/>
            </div>
        );
    }
}
export default Game;