import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

 class LifeCycleA extends Component {
     constructor(){
         super()

         this.state ={

         }

         console.log('Constructor of LifecycleA is called')
     }

     static getDerivedStateFromProps(){
        console.log('getDerivedStateFromProps of LifecycleA is called')
         
         return null
     }
     componentDidMount(){
        console.log('componentDidMount of LifecycleA is called')
     }

  render() {
    console.log('render method of LifecycleA is called')
    return (
      <div>
          <LifeCycleB />
      </div>
    )
  }
}

export default LifeCycleA