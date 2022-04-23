import React, { Component } from 'react'

class ClassClick extends Component {

     clickHandler(){
        console.log('Button Clicked - From Class')
    }

  render() {
    return (
      <div>
          <button className="btn btn-primary"
                  onClick={this.clickHandler}
          >Class Click</button>
      </div>
    )
  }
}

export default ClassClick