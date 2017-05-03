import React, { Component } from 'react';
// import logo from './logo.svg';
import Panel from './Panel';
import UserAndPass from './UserAndPass';
import Header from './Header';
import './App.css';

let user = "Kuo";
let pass = "Password";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Header />
        <Panel />
        <UserAndPass />
        <div className="test"> {user} {pass}</div>
      </div>
    );
  }
}

export default App;
