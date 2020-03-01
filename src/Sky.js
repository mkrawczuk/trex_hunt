import React, { Component } from 'react'
import './Sky.css'

class Cloud extends Component {
    render() {
        return <div className="cloud" style={{top: Math.floor(Math.random() * 40)}}></div>
    }
}

class Sky extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clouds: [],
            // pool of cloud's keys. cloud components should be reused
            // instead of continously spawning new clouds.
            spawnCloudsTimerId: 0,
        };
    }

    componentDidMount() {
        // immediately spawn a cloud...
        this.spawnOneCloud(4);
        // ...then spawn some more.
        this.spawnClouds(3);
    }

    componentWillUnmount() {
        clearTimeout(this.state.spawnCloudsTimerId);
    }

    onCloudReachedEnd = () => {
        console.log('dua')
        this.setState({
            // remove the first cloud in the array, which is the cloud
            // that reached the end of he scene. this would not work
            // if clouds had different velocities.
            clouds: this.state.clouds.splice(0, 1),
        })
    }

    // spawn n clouds in random time offsets, at random height
    spawnClouds = (n) => {
        if (0 === n) return;
        let t = 10000 * Math.random() + 5000;
        let spawnCloudsTimerId = setTimeout(() => {
            this.spawnOneCloud(n);
            this.spawnClouds(--n);
        }, t);

        this.setState( {
            spawnCloudsTimerId: spawnCloudsTimerId,
        })
    
    }

    spawnOneCloud = (key) => {
            this.setState({
            clouds: this.state.clouds.concat(<Cloud key={key}/>),
        })
    }

    render() { 
        return (
            <div className="sky ">
                {this.state.clouds.map((cloud) => cloud)}
            </div>
         );
    }
}
 
export default Sky;