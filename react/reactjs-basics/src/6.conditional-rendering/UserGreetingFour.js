import React, { Component } from 'react'

export class UserGreetingFour extends Component {
    constructor() {
        super()

        this.state = {
            isLoggedIn: true
        }
    }
    render() {
        return (
            this.state.isLoggedIn && <div><h1>Welcome Scott</h1></div>
        )
      
    }
}

export default UserGreetingFour