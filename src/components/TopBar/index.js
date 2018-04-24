import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

import routes from '../../constants/routes'

export default class TopBar extends PureComponent {
  render() {
    return(
      <div className="top-bar">
        <h1>Group Cookbook</h1>
        <ul>
          <li><Link to={routes.home}>Home</Link></li>
          <li><Link to={routes.signIn}>Sign In</Link></li>
        </ul>
      </div>
    );
  }
}
