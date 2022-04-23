import React, { Component } from 'react'

 class UserFormOne extends Component {
     constructor(){
         super()

         this.state = {
             username: '',
             comments: '',
             country: 0,
             gender: '',
             isAdmin: false
         }

         //this.state.username ='Scott'
     }

     clearFileds(){
         this.setState({
             username :'',
             comments: '',
             country: 0,
             gender: '',
             isAdmin: false
         })
     }

     getFormData(){
        console.log(this.state.username)
        console.log(this.state.comments)
        console.log(this.state.country)
        console.log(this.state.gender)
        console.log(this.state.isAdmin)
     }

  render() {
    return (
      <>
        <h1>UserForm</h1>
        <form action="">
            <div>
                <label>UserName</label>
                <input type="text" 
                       className="form-control w-50" 
                       value={this.state.username} 
                       onChange={(event)=>this.setState({username: event.target.value})}
                />
            </div>
            <br />
            <div>
                <label>Comments</label>
                <textarea className="form-control w-50" 
                          value={this.state.comments}
                          onChange={(event)=>this.setState({comments: event.target.value})}
                >
                </textarea>
            </div>
            <br />
            <div>
                <label>Country</label>
                <select className="form-select w-50" 
                        value={this.state.country}
                        onChange={(event)=>this.setState({country: event.target.value})}
                >
                    <option value={0}>Select</option>
                    <option value={1}>Bharat</option>
                    <option value={2}>Japan</option>
                    <option value={3}>Australia</option>
                </select>
            </div>
            <br />
            <div>
                <label>Gender</label>&nbsp;&nbsp;
                <input type="radio" 
                       className="form-check-input" 
                       value={1} 
                       onChange={(event)=>this.setState({gender: event.target.value})}
                       name="gender"
                />&nbsp;&nbsp;Female&nbsp;&nbsp;
                <input type="radio" 
                       className="form-check-input" 
                       value={0} 
                       onChange={(event)=>this.setState({gender: event.target.value})}
                       name="gender"
                />&nbsp;&nbsp;Male&nbsp;&nbsp;
            </div>
            <br />
            <div>
                <label>IsAdmin</label>&nbsp;&nbsp;
                <input type="checkbox" 
                       className="form-check-input"
                       value={this.state.isAdmin}
                       onChange={() => this.setState({isAdmin : !this.state.isAdmin})}
                       />
            </div>
            <br />
            <div>
                <input type="button" 
                        className="btn btn-primary"
                        onClick={() => this.getFormData()}
                        value="Get Data"
                />&nbsp;&nbsp;&nbsp;
                <button type="reset" 
                        className="btn btn-warning"
                        onClick={() => this.clearFileds()}
                >Reset</button>
            </div>
        </form>
      </>
    )
  }
}

export default UserFormOne