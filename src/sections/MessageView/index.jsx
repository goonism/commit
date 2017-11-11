import React, { Component } from 'react';
import Channels from '../../components/Channels'
import Messages from '../../components/Messages'
import {sendChatMessage, getMessagesFromChannel} from '../../util/ghwrap.js';
import SplitPane from 'react-split-pane'

export default class MessageView extends Component {
  constructor() {
    super();
    this.state = {
      messages : []
    };
  }

  componentWillMount() {
    this.getMessages('master');
  }

  getMessages = async (branches) => {
    const messages = await getMessagesFromChannel(branches);
    this.setState({messages:messages});
  }

  // <Messages/>
  render() {
    return (
      <SplitPane split="vertical">
        <Channels/>
        {this.state.messages &&
            this.state.messages.map((message) =>
              <div> {message} </div>)
        }
      </SplitPane>
    );
  }
}
