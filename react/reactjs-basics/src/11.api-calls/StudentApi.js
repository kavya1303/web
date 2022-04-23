import React, { Component } from 'react'

 class StudentApi extends Component {
     constructor(){
         super()

         this.state = {
             students: [],
             _id: '',
             name: '',
             email: '',
             city: ''
         }
     }

     componentDidMount(){
        this.getStudents()
     }

     getStudents(){
        fetch("http://localhost:3001/api/students")
        .then(response => response.json())
        .then(data => this.setState({students: data}))
     }

     clearFileds(){
         this.setState({
            _id: '',
            name: '',
            email: '',
            city: ''           
         })
     }

     createStudent(){
         const postData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                city: this.state.city
            })
         }

         fetch(`http://localhost:3001/api/students`, postData)
         .then(response => response.json())
         .then(data => {
             this.getStudents()
             this.clearFileds()
         })
     }

     editData(student){
        this.setState({
            _id: student._id,
            name: student.name,
            email: student.email,
            city: student.city,
        })
     }

     updateStudent(){
        const putData = {
           method: 'PUT',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({
               name: this.state.name,
               email: this.state.email,
               city: this.state.city
           })
        }

        fetch(`http://localhost:3001/api/students/${this.state._id}`, putData)
        .then(response => response.json())
        .then(data => {
            this.getStudents()
            this.clearFileds()
        })
    }

    deleteStudent(studentId){
        const deleteData = {
            method: 'DELETE'
         }
 
         fetch(`http://localhost:3001/api/students/${studentId}`, deleteData)
         .then(response => response.json())
         .then(data => {
             this.getStudents()
             this.clearFileds()
         })       
    }

  render() {
    return (
        <div className="container">
        <h1>Student Form</h1>
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Actions</th>
                </tr>
                <tr>
                    <th>
                        <input type="text" 
                               value={this.state.name} 
                               onChange={(event) => this.setState({name: event.target.value}) }
                        />
                    </th>
                    <th>
                    <input type="text" 
                               value={this.state.email} 
                               onChange={(event) => this.setState({email: event.target.value}) }
                        />
                    </th>
                    <th>
                    <input type="text" 
                               value={this.state.city} 
                               onChange={(event) => this.setState({city: event.target.value}) }
                        />
                    </th>
                    <th>
                        <button type="button" 
                                className="btn btn-primary"
                                onClick={() =>this.createStudent()}
                        >Add</button>&nbsp;&nbsp;
                        <button type="button" 
                                className="btn btn-warning"
                                onClick={() => this.updateStudent()}
                        >Update</button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.students.map(student => (
                        <tr key={student._id}>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.city}</td>
                            <td>
                                 <button type="button" 
                                         className="btn btn-warning"
                                         onClick={() => this.editData(student)}
                                >Edit</button>&nbsp;&nbsp;
                                 <button type="button" 
                                         className="btn btn-danger"
                                         onClick={() => this.deleteStudent(student._id)}
                                 >Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </div>

    )
  }
}

export default StudentApi