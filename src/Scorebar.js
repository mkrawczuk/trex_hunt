import './Scorebar.css';
import React, { Component } from 'react';

class Scorebar extends Component {
    render() {
        return (
        <div className="scorebar">
            <span className="score">
                {this.props.score}
            </span>
        </div>);
    }
}

export default Scorebar;