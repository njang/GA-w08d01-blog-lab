import React, { Component } from 'react';
import logo from './logo.svg';
import Comment from './Comment.js'
import './Post.css';

class Post extends Component {
  // when our component is initialized,
  // our constructor function is called
  constructor (props) {
    // make call to parent class' (Component) constructor
    super()
    // define an initial state
    this.state = {
      // counter: 0 // initialize this.state.counter to be 0
      body: "White whale"
    }
  }
  handleClick (e) {
    // setState is inherited from the Component class
    let newBody = prompt("Please enter your name", "");
    this.setState({
      body: newBody 
    })
  }
  render() {
    return (
      <div className="Post">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{this.props.title}</p>
        <p>{this.props.author}</p>
        <span>{this.state.body} <button onClick={(e) => this.handleClick(e)}>Edit</button></span>
        
        
        <h3>Comments:</h3>
        {/* Render Comment component, passing in data */}
        {this.props.comments.map((comment) => {
          return (
            <Comment body={comment} />
          )
        })}
        
      </div>
    );
  }
}

export default Post;
