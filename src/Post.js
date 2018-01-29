import React, { Component } from 'react';
import logo from './logo.svg';
import Comment from './Comment.js'
import './Post.css';

class Post extends Component {
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
        <p>{this.props.body}</p>
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
