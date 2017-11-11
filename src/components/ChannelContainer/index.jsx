import React, { Component } from 'react';

import styled from 'styled-components';

// TODO: Extract these out as reusable component if necessary
const HeadingText = styled.span`
  font-size: 24px;
  text-align: center;
`;

const Heading = styled.div`
  width: 100%;
  height: 70px;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
`;

const Container = styled.div`
  color: white;
  font-family: Helvetica, Arial, Sans-Serif;
  padding-left: 1em;
  padding-right: 1em;
`

export default class extends Component {
  render() {
    return (
      <Container>
        <Heading>
          <HeadingText>Channels</HeadingText>
        </Heading>
        {this.props.children}
      </Container>
    );
  }
}
