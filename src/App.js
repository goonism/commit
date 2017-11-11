import React, { Component } from 'react';
import Channels from './Channels.js'
import Messages from './Messages.js'
import SplitPane from 'react-split-pane'

class App extends Component {
  render() {
    return (
      <SplitPane split="vertical">
        <Channels/>
        <Messages/>
      </SplitPane>
    );
  }
}

export default App;
