import React, { PureComponent } from 'react'
import * as Styled from './styled'

export default class Home extends PureComponent {
  render() {

    return(
      <Styled.Content>
        <Styled.Image src={require('../../images/steak.jpg')} alt={'Delicious Food Pic'}/>
        <Styled.SignUp>Hi</Styled.SignUp>
      </Styled.Content>
    );
  }
}