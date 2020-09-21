import React, { Component } from 'react';
import caique1 from '../img/caique_accueil.jpeg';
import Form from '../contents/Form';

class Home extends Component {
render() {
    return (
        <div className="contentdiv home">
            <div>
            <p>Ceci est un site pour présenter Auguste, notre perroquet:</p>
            <img src={caique1} className="caique_accueil"></img>
            </div>
            <div>
            <Form/>
            </div>
        </div>
        )
    }
}

export default Home

