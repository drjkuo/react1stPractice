import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const h = (
  <head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
);

const panel = (
  <div className="App-header">
    <div className="panel panel-default">
        <div className="panel-body">Sign in</div>
    </div>
  </div>
);

const userAndPass = (
  <div>
    <div className="form-group">
      <label for="usr">Name:</label>
    <input type="text" className="form-control" id="usr"/>
    </div>
    <div className="form-group">
      <label for="pwd">Password:</label>
    <input type="password" className="form-control" id="pwd"/>
    </div>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App fluid-container">
          {panel}
          {userAndPass}
      </div>
      );
    }
  }

  export default App;
