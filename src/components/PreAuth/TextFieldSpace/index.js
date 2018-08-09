import React, { PureComponent } from 'react'
import Input from '../../ui-components/Input'
import * as Styled from './styled'

export default class TextFieldSpace extends PureComponent {
  render() {
    return(
      <Styled.TextFieldSpace>
        <Input floatingLabelText={'First Name'} /><br/>
        <Input floatingLabelText={'Last Name'} /><br/>
        <Input floatingLabelText={'Email'} /><br/>
        <Input floatingLabelText={'Password'} type={'password'} /><br/>
        <Input floatingLabelText={'Confirm Password'} type={'password'} /><br/>
      </Styled.TextFieldSpace>
    );
  }
}