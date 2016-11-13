import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './components/App'
import Home from './components/Home'
import NotFound from './components/NotFound'

import './css/normalize.css'
import './css/index.css'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
), document.getElementById('root'))
