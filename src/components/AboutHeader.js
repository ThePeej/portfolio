import React from 'react'
import { Header, Icon, Image } from 'semantic-ui-react'

const AboutHeader = () => (
  <div>
    <Header as='h2' icon textAlign='center'>
      <Icon name='users' circular />
      <Header.Content>
        PJ Frias
      </Header.Content>
    </Header>
  </div>
)

export default AboutHeader