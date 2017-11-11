import React, { Component } from 'react';
import './index.css';

class MessageCell extends Component {
  render() {
    return (
      <div className="messageCell" style={{
        backgroundColor: "red",
        width: "100%",
        minHeight: "40px",
        maxHeight: "auto",
        margin: "10px"
      }}>
        <span>{this.props.text}</span> 
      </div>
    );
  }
}

export default class Messages extends Component {
  render() {
    return (
      <div style={{
        width: "100%",
        height: "100vh"
      }}>
        <MessageCell text="hello"/>
      </div>
    );
  }
}
