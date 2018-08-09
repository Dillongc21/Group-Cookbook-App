import React, { PureComponent } from 'react'
import * as Styled from './styled'
import v from '../../../styles/variables'
import FacebookIcon from 'react-icons/lib/fa/facebook-official'
import TextFieldSpace from '../TextFieldSpace/index'
import About from '../About/index'

import { Divider } from 'material-ui'
import RaisedButton from '../../ui-components/RaisedButton'

export default class Home extends PureComponent {
  render() {
    return(

      <div>
        <Styled.MainContent>
          <Styled.Image/>
          <Styled.SignUp>

            <Styled.SignUpHeader>Create a free account!</Styled.SignUpHeader>

            {/* Text Inputs */}
            <TextFieldSpace/>

            {/* Buttons */}
            <Styled.CtaButton>
              <RaisedButton
                to={'/'}
                label={'Create Account'} />
            </Styled.CtaButton>
            <Divider />
            <Styled.FacebookCtaButton>
              <RaisedButton
                to={'/'}
                backgroundColor={v.facebookBlue}
                label={'Create account with Facebook'}
                icon={<FacebookIcon size={25} color={v.colorWhite}/>} />
            </Styled.FacebookCtaButton>

          </Styled.SignUp>
        </Styled.MainContent>
        <About/>
      </div>
    );
  }
}