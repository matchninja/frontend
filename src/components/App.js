import React, { Component } from 'react'
import Header from './Header'
import Logo from './Logo'
import Navbar from './Navbar'

const Main = ({ children }) => <div>{children}</div>
const Content = ({ children }) => <div>{children}</div>

export default class App extends Component {
  render () {
    return (
      <Main>
        <Header>
          <Logo />
          <Navbar />
        </Header>
        <Content>
          {this.props.children}
        </Content>
      </Main>
    )
  }
}
