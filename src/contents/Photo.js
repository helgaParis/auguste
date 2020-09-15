import React, { Component } from 'react';
import cat2 from '../img/chat2.jpg';
import cat3 from '../img/chat3.jpg';
import cat4 from '../img/chat4.jpeg';
import cat5 from '../img/chat5.jpeg';

class Photo extends Component {
render() {
    return (
        <div className="contentdiv photo">
            <div>
            <p>Voici différentes photos de  notre perroquet Auguste</p>
            <img src={cat2} className="chat2"></img>
            <img src={cat3} className="chat3"></img>
            <img src={cat4} className="chat4"></img>
            <img src={cat5} className="chat5"></img>
            </div>
        </div>
        )
    }
}
    
export default Photo
