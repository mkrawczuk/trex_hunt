import '../styles/Lifebar.css';
import React from 'react';

function Lifebar(props) {
    let lifes = [];
    for(let i = 0; i < props.lifes; ++i) {
        lifes.push(<div className="life" key={i}></div>)
    }

    return ( <div className="lifebar">{lifes}</div> );
}
 
export default Lifebar;