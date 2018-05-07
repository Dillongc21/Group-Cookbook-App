import React, { PureComponent } from 'react'
import v from '../../../styles/variables'
import { TextField } from 'material-ui'
import * as Styled from './styled'

const styles = {
  underlineFocusStyle: {
    borderColor: v.colorPrimary
  },
  floatingLabelFocusStyle: {
    color: v.colorPrimary
  },
  floatingLabelStyle: {
    color: v.colorBlack50
  }
};

export default class TextFieldSpace extends PureComponent {
  render() {
    return(
      <Styled.TextFieldSpace>
        <TextField
          floatingLabelText={'First Name'}
          underlineFocusStyle={styles.underlineFocusStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          fullWidth={true}
          floatingLabelStyle={styles.floatingLabelStyle}
        /><br/>

        <TextField
          floatingLabelText={'Last Name'}
          underlineFocusStyle={styles.underlineFocusStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          fullWidth={true}
          floatingLabelStyle={styles.floatingLabelStyle}
        /><br/>

        <TextField
          floatingLabelText={'Email'}
          underlineFocusStyle={styles.underlineFocusStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          fullWidth={true}
          floatingLabelStyle={styles.floatingLabelStyle}
        /><br/>

        <TextField
          floatingLabelText={'Password'}
          underlineFocusStyle={styles.underlineFocusStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          fullWidth={true}
          floatingLabelStyle={styles.floatingLabelStyle}
          type={'password'}
        /><br/>

        <TextField
          floatingLabelText={'Confirm Password'}
          underlineFocusStyle={styles.underlineFocusStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          fullWidth={true}
          floatingLabelStyle={styles.floatingLabelStyle}
          type={'password'}
        /><br/>
      </Styled.TextFieldSpace>
    );
  }
}