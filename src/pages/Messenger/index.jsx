import React, { Component } from 'react';
import Channels from '../../components/Channels/'
import Messages from '../../components/Messages/'
import SplitPane from 'react-split-pane'

export default class Messenger extends Component {
  render() {
    return (
      <SplitPane split="vertical" minSize={200} defaultSize={200}>
        <Channels/>
        <Messages/>
      </SplitPane>
    );
  }
}
