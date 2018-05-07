import React, { PureComponent } from 'react'
import * as Styled from './styled'
import v from '../../styles/variables'
import FacebookIcon from 'react-icons/lib/fa/facebook-official'
import TextFieldSpace from './TextFieldSpace'
import About from './About'

import { RaisedButton, Divider } from 'material-ui'

const styles = {
  marginTop40: {
    marginTop: '40px'
  },
  marginTop20: {
    marginTop: '20px'
  }
}

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
            <RaisedButton
              backgroundColor={v.colorPrimary}
              fullWidth={true}
              label={'Create Account'}
              labelColor={v.colorWhite}
              style={styles.marginTop40}
            />
            <Divider style={styles.marginTop20}/>
            <RaisedButton
              backgroundColor={v.facebookBlue}
              fullWidth={true}
              label={'Create account with Facebook'}
              labelColor={v.colorWhite}
              style={styles.marginTop20}
              icon={<FacebookIcon size={25} color={v.colorWhite}/>}
            />
          </Styled.SignUp>
        </Styled.MainContent>
        <About/>
      </div>
    );
  }
}