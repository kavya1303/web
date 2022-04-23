import React, { Component } from 'react'

 class LifeCycleB extends Component {
     constructor(){
         super()

         this.state ={

         }

         console.log('Constructor of LifecycleB is called')
     }

     static getDerivedStateFromProps(){
        console.log('getDerivedStateFromProps of LifecycleB is called')
         
         return null
     }
     componentDidMount(){
        console.log('componentDidMount of LifecycleB is called')
     }
     
  render() {
    console.log('render method of LifecycleB is called')
    return (
      <div>

      </div>
    )
  }
}

export default LifeCycleB