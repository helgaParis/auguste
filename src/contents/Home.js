import React, { Component } from 'react';
import cat1 from '../img/chat1.jpg';
import Form from '../contents/Form';

class Home extends Component {
render() {
    return (
        <div className="contentdiv home">
            <div>
            <p>Ceci est un site pour présenter Auguste, notre perroquet, port 5000:</p>
            <img src={cat1} className="chat1"></img>
            </div>
            <div>
            <Form/>
            </div>
        </div>
        )
    }
}

export default Home

