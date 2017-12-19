import React, { Component } from 'react';

const url = subreddit =>
  `https://www.reddit.com/r/${subreddit}/.json`

class Reddits extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }
  componentDidMount(){
    fetch(url(this.props.subreddit))
      .then(d => d.json().then(
        d =>{
          this.setState({
            posts : d
          })
        }
      ))
  }

  render() {
    if(!this.state.posts) return <p>Loading...</p>
    var titles = [];
    var contents = [];
    for (var i = 0; i < 10; i++) {
      titles.push(this.state.posts.data.children[i].data.title)
      if (this.state.posts.data.children[i].data.selftext == ""){
        contents.push("This post does not have a preview.")
      }
      else{
        contents.push(this.state.posts.data.children[i].data.selftext);
      }
    }

    return (
      <div>
          <h2>{titles[0]}</h2>
          <p>{contents[0]}</p>
          <h2>{titles[1]}</h2>
          <p>{contents[1]}</p>
          <h2>{titles[2]}</h2>
          <p>{contents[2]}</p>
          <h2>{titles[3]}</h2>
          <p>{contents[3]}</p> 
          <h2>{titles[4]}</h2>
          <p>{contents[4]}</p> 
          <h2>{titles[5]}</h2>
          <p>{contents[5]}</p>
          <h2>{titles[6]}</h2>
          <p>{contents[6]}</p>
          <h2>{titles[7]}</h2>
          <p>{contents[7]}</p>
          <h2>{titles[8]}</h2>
          <p>{contents[8]}</p>
          <h2>{titles[9]}</h2>
          <p>{contents[9]}</p>
      </div>
    );
  }
}

export default Reddits;
