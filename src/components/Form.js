import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userName:'',
             comment:'',
             userType:'',
        }
    }
    userNameChange = ( event ) =>{
        this.setState({
            userName:event.target.value,

        })
    }
    handleCommentChange = (event)=>{
        this.setState({
            comment:event.target.value, 
        })
    }
    handleUserType = (event) =>{
        this.setState({
            userType:event.target.value, 
        })
    }
    handleSubmit = (event)=>{
        alert(`${this.state.userName} ${this.state.comment} ${this.state.userType}`)
        event.preventDefault();
    }
    
    render() {
        return (
            <div>
               <form onSubmit={this.handleSubmit}>
                   <div>
                       <label>UserName</label>
                       <input type = "text" value = {this.state.userName} onChange={this.userNameChange} />
                   </div>
                   <div>
                       <label>COmments</label>
                       <textarea value={this.state.comment} onChange= {this.handleCommentChange} ></textarea>
                   </div>
                   <div>
                       <label>Select User</label>
                       <select value={this.state.userType} onChange={this.handleUserType} >
                            <option></option>
                            <option>Admin</option>
                            <option>User</option>
                            <option>Data Entry </option>
                       </select>
                       <button type="submit">Submit</button>
                   </div>
               </form>
            </div>
        )
    }
}

export default Form
