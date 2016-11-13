import React, { Component } from 'react'
import { IndexLink, Link } from 'react-router'

export default class Navbar extends Component {
  render () {
    return (
      <ul className="navbar">
        <li>
          <IndexLink
            to="/"
            activeClassName="active-link"
          >Home</IndexLink>
        </li>
        <li>
          <Link
            to="/rankings"
            activeClassName="active-link"
          >Rankings</Link>
        </li>
      </ul>
    )
  }
}
