import React from 'react';

class HogCard extends React.Component {
    
    constructor() {
        super()
        this.state = {
            showInfo: false,
            hidden: false
        }
    }

    createImageCard = (name) => {
        let fileName = name.toLowerCase().replace(/ /g,"_")
        let imgSrc = require(`../hog-imgs/${fileName}.jpg`)
        return imgSrc
    }

    toggleInfo = (event) => {
        this.setState({
            showInfo: !this.state.showInfo
        })
        !this.state.showInfo ? event.target.innerHTML="Hide Info" : 
        event.target.innerHTML="More Info" 
    }

    makeHidden = (event) => {
        this.setState({
            hidden: !this.state.hidden
        })
        this.props.hog.hidden = !this.props.hog.hidden
    }
    
    render() {
        const obj = this.props.hog
        console.log(obj.hidden);
        return (
            // { obj,hidden === falsey ? showCard : dontShowCard }
            <div className="ui eight wide column">
                <div className="main-card">
                    <img src={this.createImageCard(obj.name)} />
                    <h1>{obj.name}</h1>
                </div>

                <div className="main-buttons">
                    <button className="info" onClick={this.toggleInfo}>More Info</button>
                    <button className="hide" onClick={this.makeHidden} >Hide Hog</button>
                </div>
                { this.state.showInfo ? 
                <div className="more-info" >
                    <p>{obj.specialty}</p>
                    <p>{obj.weight}</p>
                    <p>{obj["highest medal achieved"]}</p>
                </div> : null }
                
            </div>
        )       
    }
}

export default HogCard