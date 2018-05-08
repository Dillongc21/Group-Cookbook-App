import React, { PureComponent } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import TopBar from '../../PreAuth/TopBar'
import SignIn from '../../PreAuth/SignIn'
import LandingPage from '../../PreAuth/LandingPage'
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