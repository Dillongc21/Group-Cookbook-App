import React, { PureComponent } from 'react'
import v from '../../../styles/variables'
import { TextField } from 'material-ui'

export default class StyledFlatButton extends PureComponent {
  static defaultProps = {
    underlineFocusStyle: {
      borderColor: v.colorPrimary
    },
    floatingLabelFocusStyle: {
      color: v.colorPrimary
    },
    floatingLabelStyle: {
      color: v.colorBlack50,
    },
    fullWidth: true
  };

  render() {
    return(
      <TextField {...this.props} />
    );
  }
}