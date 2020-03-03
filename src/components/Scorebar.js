import '../styles/Scorebar.css';
import React from 'react';

function Scorebar(props) {
        return (
        <div className="scorebar">
            <span className="score" key={props.score}>
                {props.score}
            </span>
        </div>);
}

export default Scorebar;