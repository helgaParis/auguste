import React, { Component } from 'react';
import axios from 'axios';

function Form() {
  const [state, setState] = React.useState({
    username: '',
    firstname:'',
    usertext: ''
  })
   
  function ChangeHandler(event) {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value
    });
  }

  function SubmitHandler(event) {
    event.preventDefault();
    alert('resultat: ' + state.username + ' ' + state.firstname + ' ' + state.usertext);
  }
  

    return (
      <form onSubmit={SubmitHandler}> 
      <h1>Hello {state.username} {state.firstname} {state.usertext}</h1>
      <p>Enter your name: </p>
      <input
        type='text'
        name='username'
        value={state.username}
        onChange={ChangeHandler}
      />
      <p>Enter your firstname: </p>
      <input
        type='text'
        name='firstname'
        value={state.firstname}
        onChange={ChangeHandler}
      />
      <label>Commentaire: 
        <textarea
          name="usertext"
          placeholder="Ecrivez un commentaire"
          rows="4" 
          cols="50" 
          value={state.usertext}
          onChange={ChangeHandler}>
        </textarea>
      </label>
      <input type="submit" value="Envoyer"></input>
      </form>
    );
}




export default Form
