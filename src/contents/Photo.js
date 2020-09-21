import React, { Component } from 'react';
import caique2 from '../img/caique_photo1.jpeg';
import caique3 from '../img/caique_photo2.jpeg';
import caique4 from '../img/caique_photo3.jpeg';
// import cat5 from '../img/chat5.jpeg';

class Photo extends Component {
render() {
    return (
        <div className="contentdiv photo">
            <div>
            <p>Voici différentes photos de  notre perroquet Auguste</p>
            <img src={caique2} className="caique_photo1"></img>
            <img src={caique3} className="caique_photo2"></img>
            <img src={caique4} className="caique_photo3"></img>
            {/* <img src={cat5} className="chat5"></img> */}
            </div>
        </div>
        )
    }
}
    
export default Photo
