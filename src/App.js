import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './UserInput/Input';
import Output from './UserOutput/Output';

class App extends Component {
  state = {
    username: "Your Name"
  }

  changeNameHandler = (event) => {
    this.setState( {
            username: event.target.value
        }
      )
  }


  render() {
    const style = {
      textAlign: 'center',
      width: '80%',
      margin: 'auto',
      fontSize: '60px',
      fontFamily: 'georgia',
      padding: '20px'
    }


    return (
        <div>
          <h1 style={style}>Assignment One</h1>
          <Output>Input Anything To Change The Name</Output>
          <Input 
            text={this.state.username}
            change = {this.changeNameHandler}
          ></Input>
          <Output name={this.state.username}/>
          
        </div>
    );
  }
}

export default App;
