import React, { Component } from 'react';
import Navitem from './Navitem';

class Navbar extends Component {
   
    render() {
        return (
            <nav>
                <ul>
                    <Navitem item="Accueil" tolink="/" ></Navitem>
                    <Navitem item="Photos" tolink="/photo" ></Navitem>
                    <Navitem item="Videos" tolink="/video"></Navitem>
                    <Navitem item="Formulaire" tolink="/form"></Navitem>
                </ul>
            </nav>
            )
        }
    }
    
export default Navbar