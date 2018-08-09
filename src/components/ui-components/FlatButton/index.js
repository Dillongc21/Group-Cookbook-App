import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import v from '../../../styles/variables'
import { FlatButton } from 'material-ui'

export default class StyledFlatButton extends PureComponent {
  static propTypes = {
    to: PropTypes.string,
    onClick: PropTypes.func
  };

  static defaultProps = {
    hoverColor: v.colorPrimaryLightest,
    rippleColor: v.colorPrimaryLight,
    labelStyle: {
      color: v.colorPrimaryDark
    }
  };

  render() {
    const { to , ...props } = this.props;
    return(
      <FlatButton {...props} containerElement={ <Link to={to} />} />
    );
  }
}