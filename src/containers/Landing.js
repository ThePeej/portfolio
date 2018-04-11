import React, { Component } from 'react'
import background from '../assets/Landing.jpg'
import { Image } from 'semantic-ui-react'



export default class About extends React.Component {
  state = {}

  render(){
    return(
      <div>
        <span>
          <Image fluid src={background}/>
        </span>
      </div>
    )
  }

}