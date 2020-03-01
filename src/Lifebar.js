import './Lifebar.css'
import React, { Component } from 'react';

class Lifebar extends Component {
 render() {
        let lives = [];
        for(let i = 0; i < this.props.lives; ++i) {
            lives.push(<div className="life"></div>)
        }
        return (
        <div className="lifebar">
            {lives.map(life => life)}
        </div> );
    }
}
 
export default Lifebar;