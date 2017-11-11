import React, { Component } from 'react';
import Channels from 'components/Channels.js'
import Messages from 'components/Messages.js'
import SplitPane from 'react-split-pane'

export default class ChannelView extends Component {
  render() {
    return (
      <SplitPane split="vertical">
        <Channels/>
        <Messages/>
      </SplitPane>
    );
  }
}
