import './Scoreboard.css';
import React, {Component} from 'react';

class Scoreboard extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
        <div className="scoreboard">
            (placeholder)
            <br/>
            Game Over!
            Your final score:
            <br/>
            {this.props.score}
            <br/>
            Click to restart
        </div> );
    }
}
 
export default Scoreboard;