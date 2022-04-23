import React, { Component } from 'react'

export class GreetingTwo extends Component {
  render() {
    let {name, skill, children} = this.props
    return (
      <div>
        <h1>Name: {name}</h1>
        <h1>Skill: {skill}</h1>
        {children}
      </div>
    )
  }
}

export default GreetingTwo