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
            lifes: 3,   
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
            lifes: 3,
            score: 0,
            scene: 
            (<>
                <Scorebar score={this.state.score}/>
                <Lifebar lifes={this.state.lifes}/>
                <TRex onHit={this.trexHit} onEscaped={this.trexEscaped}/>
            </>),
        })
    }

    trexHit = () => {
        let scoreIncrement = 1000;
        this.setState({
            score: this.state.score + scoreIncrement,
            // since passing state to children through props does not guarantee re-render,
            // we have to re-render all the components.
            scene: (
            <>
                <Scorebar score={this.state.score + scoreIncrement}/>
                <Lifebar lifes={this.state.lifes}/>
                <TRex onHit={this.trexHit} onEscaped={this.trexEscaped}/>
            </>),
        });
    }

    trexEscaped = () => {
        // game over!
        // reset life count and score.
        if (0 === this.state.lifes) {
            this.setState({
                game: this.gameState.SCOREBOARD,
                scene: <Scoreboard score={this.state.score} />,
                lifes: 3,
                score: 0,
            })
        } else {
            let _lifes = this.state.lifes - 1;
            this.setState({
                lifes: _lifes,
                // since passing state to children through props does not guarantee re-render,
                // we have to re-render all the components.
                scene: (
                    <>
                        <Scorebar score={this.state.score}/>
                        <Lifebar lifes={this.state.lifes - 1}/>
                        <TRex onHit={this.trexHit} onEscaped={this.trexEscaped} key={_lifes}/>
                    </>),
                });
        };

    }

    render() {
        return (
            <div className="scene" onClick={this.handleClick}>
                <Sky />
                {this.state.scene}
                <div className="floor"/>
            </div>
        );
    }
}
export default Game;