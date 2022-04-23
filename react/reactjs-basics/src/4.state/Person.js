import React, { Component } from 'react'

export class Person extends Component {
    constructor(){
        super()

        this.state = {
            name: 'Scott Desatnick',
            city: 'Boston',
            isLocal: true 
        }
    }
  render() {
      let {name, city, isLocal} = this.state
    return (
      <div>
          <h1>Name: {name}</h1>
          <h1>City: {city}</h1>
          <h1>Local: {isLocal ? "True" : "False"}</h1>
      </div>
    )
  }
}

export default Person