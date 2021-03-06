import '../styles/TRex.css'
import React, { Component } from 'react'

class TRex extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            motion: "trex-run",
            sprite: "trex-toddle",
         }
    }

    handleEscaped = (e) => {
        if (e.animationName.includes("run")) {
            this.props.onEscaped();
        }
    }

    handleHit = () => {
        this.props.onHit();
        // a trick to introduce a delay between subsequent .then calls
        function delay(ms) {
            return function(x) {
                return new Promise(resolve => setTimeout(() => resolve(x), ms));
            };
        }

        new Promise(resolve => {
            this.setState({
                sprite: 'trex-shock',
                // stops `motion`'s animation
                style: {
                    WebkitAnimationPlayState : 'paused',
                },
            })
            resolve();
        })
        .then( delay(700) )
        .then( () => {
            this.setState({ 
                motion: '',
                sprite: '',
            });
        })
        .then( delay(Math.random() * 2000) )
        .then( () => {
            this.restart()
        });
    }

    restart = () => {
        this.setState({
            motion: "trex-run",
            sprite: "trex-toddle",
            style: {}
        });
    }

    render() { 
        return (
        <div className={this.state.motion}
             style={this.state.style}
             onAnimationEnd={this.handleEscaped}
             onClick={this.handleHit}>
                 <div className={this.state.sprite}>
                 </div>
        </div> );
    }
}
 
export default TRex;