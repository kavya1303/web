import React, { Component } from 'react'

export class UserGreetingTwo extends Component {
    constructor() {
        super()

        this.state = {
            isLoggedIn: true
        }
    }
    render() {
        let message;
        if (this.state.isLoggedIn) {
            message = <div><h1>Welcome Scott</h1></div>
        } else {
            message = <div><h1>Welcome Guest</h1></div>
        }
        return message
       // return <div>{message}</div>
    }
}

export default UserGreetingTwo