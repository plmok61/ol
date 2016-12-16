import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

import BusinessesList from './BusinessesList'

export default class App extends Component {
  

  render () {
    return (
      <div>
        <Router history={hashHistory}>
          <Route path='/' component={BusinessesList} />
        </Router>
      </div>
    )
  }
}