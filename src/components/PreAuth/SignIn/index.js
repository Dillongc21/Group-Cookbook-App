import React, { PureComponent } from 'react'
import * as Styled from './styled'
import Input from  '../../ui-components/Input'
import RaisedButton from '../../ui-components/RaisedButton'

export default class SignIn extends PureComponent {
  render() {
    return(
      <Styled.SignInWrapper>
        <Styled.Content>
          <h2>User Sign In</h2>
          <Input floatingLabelText={'Email'} />
          <Input floatingLabelText={'Password'} type={'password'} />
          <Styled.SignInBtn>
            <RaisedButton to={'/'} label={'Sign In'} />
          </Styled.SignInBtn>
        </Styled.Content>
      </Styled.SignInWrapper>
    );
  }
}