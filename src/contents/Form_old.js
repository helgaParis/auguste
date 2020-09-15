import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '',
                  firstname:'',
                  usertext: '' };
  }
  myChangeHandlerUserName = (event) => {
    this.setState({username: event.target.value});
  }

  myChangeHandlerFirstName = (event) => {
    this.setState({firstname: event.target.value});
  }

  myChangeHandlerUserText = (event) => {
    this.setState({usertext: event.target.value});
  }

  mySubmitHandlerUserText = (event) => {
    event.preventDefault();

    alert('Envoi de : Nom= ' + this.state.username
     + ', Prenom= ' + this.state.firstname 
     + ', Commentaire= ' + this.state.usertext);

     this.state = { username: '',
                  firstname:'',
                  usertext: '' };
  }

  render() {
    return (
      <form onSubmit={this.mySubmitHandlerUserText}> 
      <h1>Hello {this.state.username} {this.state.firstname} {this.state.usertext}</h1>
      <p>Enter your name: </p>
      <input
        type='text'
        onChange={this.myChangeHandlerUserName}
      />
      <p>Enter your firstname: </p>
      <input
        type='text'
        onChange={this.myChangeHandlerFirstName}
      />
      <label for="comment">Commentaire: 
        <textarea 
          id="comment" 
          name="comment"
          placeholder="Ecrivez un commentaire"
          rows="4" 
          cols="50" 
          onChange={this.myChangeHandlerUserText}>
        </textarea>
      </label>
      <input type="submit" value="Envoyer"></input>
      </form>
    );
  }
}



export default Form
