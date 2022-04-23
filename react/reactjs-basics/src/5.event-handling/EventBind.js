import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(){
        super()

        this.state = {
            message: 'Hello'
        }
        // 3rd Way
       // this.changeMessage = this.changeMessage.bind(this)
    }

    // changeMessage(){
    //     console.log(this)
    //     this.setState({
    //         message: 'Thank you'
    //     })
    // }


    changeMessage =() =>{
        console.log(this)
        this.setState({
            message: 'Thank you'
        })
    }
  render() {
    return (
      <div>
          <h1>{this.state.message}</h1>
          {/* <button className="btn btn-primary" onClick={this.changeMessage}>Change Message</button> */}

          {/* 1st Way */}
          {/* <button className="btn btn-primary" onClick={this.changeMessage.bind(this)}>Change Message</button> */}

          {/* 2nd Way */}
          {/* <button className="btn btn-primary" onClick={()=>this.changeMessage()}>Change Message</button>    */}

          {/* 3rd Way */}
          {/* <button className="btn btn-primary" onClick={this.changeMessage}>Change Message</button>  */}

          {/* 4th Way */}
          <button className="btn btn-primary" onClick={this.changeMessage}>Change Message</button>        
      </div>
    )
  }
}

export default EventBind