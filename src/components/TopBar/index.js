import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import routes from '../../constants/routes'
import * as Styled from './styled'

class TopBar extends PureComponent {

  static propTypes = {
    router: PropTypes.object
  };

  onTitleClick = () => {
    this.props.history.push(routes.home)
  };

  render() {
    return(
      <Styled.TopBar>
        <Styled.Title onClick={this.onTitleClick}>COOKBOOK</Styled.Title>
      </Styled.TopBar>
    );
  }
}

export default withRouter(TopBar);
