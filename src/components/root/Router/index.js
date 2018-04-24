import React, { PureComponent } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import TopBar from '../../TopBar'
import Home from '../../Home'
import SignIn from '../../user-portal/SignIn'
import routes from '../../../constants/routes'


export default class Router extends PureComponent {
  render() {
    return(
      <BrowserRouter>
        <div>
          <TopBar />
          <Route exact path={routes.home} component={Home} />
          <Route path={routes.signIn} component={SignIn} />
        </div>
      </BrowserRouter>
    );
  }
}