import '../styles/Lifebar.css'
import React, { Component } from 'react';

class Lifebar extends Component {
 render() {
        let lifes = [];
        for(let i = 0; i < this.props.lifes; ++i) {
            lifes.push(<div className="life" key={i}></div>)
        }
        return (
        <div className="lifebar">
            {lifes}
        </div> );
    }
}
 
export default Lifebar;