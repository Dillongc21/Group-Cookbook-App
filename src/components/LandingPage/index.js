import React, { PureComponent } from 'react'
import * as Styled from './styled'

export default class Home extends PureComponent {
  render() {

    return(
      <Styled.Content>
        <Styled.Image/>
        <Styled.SignUp>Hi</Styled.SignUp>
      </Styled.Content>
    );
  }
}