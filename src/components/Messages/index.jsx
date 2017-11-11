import React, { Component } from 'react';
import './index.css';

class MessageCell extends Component {
  render() {
    return (
      <div className="messageCell" style={{
        width: "100%",
        minHeight: "10vh",
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
      <div>

        <MessageCell text="Hey you"/>
        <MessageCell text="Hover "/>
        <MessageCell text="over"/>
        <MessageCell text="me"/>
        <MessageCell text="I turn green"/>

        <form className="input" onSubmit={(e) => this.submitMessage(e)}>
          <input type="text" ref="msg" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
