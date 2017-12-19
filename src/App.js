import React, { Component } from 'react';
import './App.css';
import Reddits from './Reddits.js';

class App extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className = "App">
        <h1>Overwatch Reddit Posts Skimmer</h1>
        <Reddits subreddit = "Overwatch"></Reddits>
      </div>
    );
  }
}

export default App;
