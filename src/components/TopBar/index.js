import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import FlatButton from 'material-ui/FlatButton'
import ArrowIcon from 'react-icons/lib/fa/angle-double-right'
import v from '../../styles/variables'

import routes from '../../constants/routes'
import * as Styled from './styled'

const styles = {
  signInBtn: {
    color: v.colorPrimaryDark
  }
};

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
          label={'Sign in'}
          labelPosition={'before'}
          hoverColor={v.colorPrimaryLightest}
          style={styles.signInBtn}
          rippleColor={v.colorPrimaryLight}
          icon={<ArrowIcon color={v.colorPrimaryDark}/>}
        />

      </Styled.TopBar>
    );
  }
}

export default withRouter(TopBar);
