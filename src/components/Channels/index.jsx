import React, { Component } from 'react';

class ChannelCell extends Component {
  render() {
    return (
      <div style={{
        width: "100%",
        height: "30px"
      }}>
        <span>Cell</span> 
      </div>
    );
  }
}

export default class Channels extends Component {
  render() {
    return (
      <div style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#4D394B"
      }}>
        <div style={{
          width: "100%",
          height: "100px"
        }}>
          <span>Channels</span> 
        </div>
      </div>
    );
  }
}
