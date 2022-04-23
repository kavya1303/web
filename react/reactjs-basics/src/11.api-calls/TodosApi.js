import React, { Component } from 'react'

 class TodosApi extends Component {
     constructor(){
         super()

         this.state = {
             todos: []
         }
     }

     componentDidMount(){
         fetch("https://jsonplaceholder.typicode.com/todos")
         .then(response => response.json())
         .then(data => this.setState({todos: data}))
     }
  render() {
    return (
        <>
            {
                this.state.todos.map(todo => (
                    <ul key={todo.id}>
                        <li>{todo.id}</li>
                        <li>{todo.title}</li>
                        <li>{todo.completed? "true": "false"}</li>
                    </ul>
                ))
            }
        </>
    )
  }
}

export default TodosApi