import React, { Component } from 'react'

 class Counter extends Component {
    constructor(){
        super()

        this.state = {
          count: 0
        }
    }

    addCount(){
     // this.state.count = this.state.count + 1
      this.setState({
          count: this.state.count + 1
      }, () => console.log(this.state.count))
     // this.render() Never do this
    }

  render() {
    console.log('render method is called')
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button className="btn btn-primary" onClick={() => this.addCount()}>Add Count</button>
      </div>
    )
  }
}

export default Counter