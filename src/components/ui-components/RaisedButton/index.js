import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { StyledRaisedButton } from './styled'
import v from '../../../styles/variables'

export default class RaisedButton extends PureComponent {
  static propTypes = {
    ...StyledRaisedButton.propTypes,
    to: PropTypes.string,
    onClick: PropTypes.func
  };

  static defaultProps = {
    ...StyledRaisedButton.defaultProps,
    backgroundColor: v.colorPrimary,
    classes: {
      raisedPrimary: 'gc-raisedPrimary',
      raisedSecondary: 'gc-raisedSecondary'
    },
    fullWidth: true,
    labelColor: v.colorWhite
  };

  render() {
    const { to , ...props } = this.props;
    return(
      <StyledRaisedButton {...props} containerElement={ <Link to={to} />} />
    );
  }
}