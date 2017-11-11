import React, { Component } from 'react';
import styled from 'styled-components';

import Messenger from 'sections/Messenger';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export default class Commit extends Component {
  render() {
    return (
      <Container>
        <Messenger/>
      </Container>
    );
  }
}
