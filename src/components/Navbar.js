import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item header>
          <h2>PJ Frias</h2>
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item
            name='About Me'
            active={activeItem === 'About Me'}
            onClick={this.handleItemClick}
          >
            About Me
          </Menu.Item>

          <Menu.Item
            name='Projects'
            active={activeItem === 'Projects'}
            onClick={this.handleItemClick}
          >
            Projects
          </Menu.Item>

          <Menu.Item
            name='Resume'
            active={activeItem === 'Resume'}
            onClick={this.handleItemClick}
          >
            Resume
          </Menu.Item>

          <Menu.Item
            name='Contact'
            active={activeItem === 'Contact'}
            onClick={this.handleItemClick}
          >
            Contact
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}