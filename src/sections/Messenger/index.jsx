import React, {Component} from 'react';

import styled from 'styled-components';

import InputSubmit from 'react-input-submit';

import ChannelContainer from 'components/ChannelContainer';

import ChannelCell from 'components/ChannelCell'
import MessageCell from 'components/MessageCell'

import Footer from 'components/Footer';

const CHANNELS = new Array(7)
	.fill(0)
	.map((item, i) => `#Channel ${i}`);

// replace with store or some data api
const MESSAGES = [
	'Hey you',
	'Hover',
	'over',
	'me',
	'I turn green',
]

const FullHeightColumnFlexSpaceBetweenContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
`

const SideBarContainer = styled(FullHeightColumnFlexSpaceBetweenContainer)`
  background-color: #392c38;
  width: 18%;
`

const ChatContainer = styled(FullHeightColumnFlexSpaceBetweenContainer)`
  width: 81%;
`

const MessageContainer = styled.div`
  height: 90%;
`

const InputContainer = styled.div`
  height: 9%;
`

export default class extends Component {
  state= {
    messages: MESSAGES
  }

  sendMessage =(m)=> {
    const {messages} = this.state;
    messages.push(m);
    this.setState({ messages });
  }

	render() {
		return (
			<Container>
        <SideBarContainer>
  				<ChannelContainer>
            {CHANNELS.map((channel,i) => <ChannelCell key={i}>{channel}</ChannelCell>)}
  				</ChannelContainer>
          <Footer/>
        </SideBarContainer>
        <ChatContainer>
          <MessageContainer>
            {this.state.messages.map((message,i) => <MessageCell key={i}>{message}</MessageCell>)}
          </MessageContainer>

          <InputContainer>
            <InputSubmit placeholder="Message here" onSubmit={this.sendMessage}/>
          </InputContainer>
        </ChatContainer>
			</Container>
		);
	}
}
