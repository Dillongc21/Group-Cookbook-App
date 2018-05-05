import React, { PureComponent } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import TopBar from '../../TopBar'
import SignIn from '../../SignIn'
import LandingPage from '../../LandingPage'
import routes from '../../../constants/routes'


export default class Router extends PureComponent {
  render() {
    return(
      <BrowserRouter>
        <div>
          <TopBar />
          <Route exact path={routes.landingPage} component={LandingPage} />
          <Route path={routes.signIn} component={SignIn} />
        </div>
      </BrowserRouter>
    );
  }
}