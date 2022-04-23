import React, { Component } from 'react'

export class Message extends Component {
    constructor(){
        super()

        this.state = {
            name: 'Scott',
            message: 'Welcome'
        }
    }

    subsribe(){
        this.setState({
            message: 'Thank you for subscribing'
        })
    }
  render() {
    return (
      <div>
          <h1>{this.state.message}, {this.state.name}</h1>
          <button className="btn btn-primary" onClick={() => this.subsribe()}>Subscribe</button>
      </div>
    )
  }
}

export default Message