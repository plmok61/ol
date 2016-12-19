import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

import BusinessesList from './BusinessesList'
import Business from './Business'
import NotFound from './NotFound'

export default class App extends Component {
  render () {
    return (
      <div>
        <Router history={hashHistory}>
          <Route path='/' component={BusinessesList} />
          <Route path='/pages/:page' component={BusinessesList} />
          <Route path='/businesses/:id' component={Business} />
          <Route path='*' component={NotFound} />
        </Router>
      </div>
    )
  }
}