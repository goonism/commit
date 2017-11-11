import React, { Component } from 'react';

class ChannelCell extends Component {
  render() {
    return (
      <div style={{
        width: "100%",
        marginBottom: "20px"
      }}>
        <span>{"#" + this.props.name}</span>
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
        backgroundColor: "#4D394B",
        color: "white",
        fontFamily: "Helvetica, Arial, Sans-Serif",
      }}>
        <div style={{
          margin: "10px"
        }}>
          <div style={{
            width: "100%",
            height: "70px",
            display: "table-cell",
            textAlign: "center",
            verticalAlign: "middle"
          }}>
            <span style={{
              fontSize: "24px",
              textAlign: "center"
            }}>Channels</span>
          </div>
          <ChannelCell name="channel1"/>
          <ChannelCell name="channel2"/>
          <ChannelCell name="channel3"/>
          <ChannelCell name="channel4"/>
          <ChannelCell name="channel5"/>
          <ChannelCell name="channel6"/>
          <ChannelCell name="channel7"/>
        </div>
      </div>
    );
  }
}
