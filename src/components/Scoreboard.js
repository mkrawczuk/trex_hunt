import '../styles/Scoreboard.css';
import React from 'react';

function Scoreboard(props) {
    return (
    <div className="scoreboard">
        (placeholder)
        <br/>
        Game Over!
        Your final score:
        <br/>
        {props.score}
        <br/>
        Click to restart
    </div> );
}
 
export default Scoreboard;