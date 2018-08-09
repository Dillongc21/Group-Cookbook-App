import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import FlatButton from '../../ui-components/FlatButton'
import ArrowIcon from 'react-icons/lib/fa/angle-double-right'
import v from '../../../styles/variables'

import routes from '../../../constants/routes'
import * as Styled from './styled'

class TopBar extends PureComponent {

  static propTypes = {
    router: PropTypes.object
  };

  onTitleClick = () => {
    this.props.history.push(routes.landingPage)
  };

  render() {
    return(
      <Styled.TopBar>
        <Styled.Title onClick={this.onTitleClick}>GroupCook</Styled.Title>
        <FlatButton
          to={routes.signIn}
          label={'Sign in'}
          labelPosition={'before'}
          icon={<ArrowIcon color={v.colorPrimaryDark}/>} />
      </Styled.TopBar>
    );
  }
}

export default withRouter(TopBar);
