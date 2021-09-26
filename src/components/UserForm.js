import React, { Component } from 'react'

class UserForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userName:'',
             userEmail:'',
             userContact:'',
             userGender:'',
             userDetails:'',
        }
    }
    handleUserName = (event)=>{
        this.setState({
            userName : event.target.value
        })
    }
    handleUserEmail = (event) =>{
        this.setState({
            userEmail : event.target.value 
        })
    }
    handleUserRegistrationForm = (event)=>{
        const {userName,userEmail} = this.state 
        alert(`${userName} ${userEmail}`)
        event.preventDefault()
    }
    render() {
        return (
            <div>
               <form onSubmit={this.handleUserRegistrationForm}>
                <div>
                        <h1>User Information </h1>
                        <label>User Name </label>
                        <input type="text" value = {this.state.userName} onChange={this.handleUserName}   />
                    </div>
                    <div>
                        <label>User Email </label>
                        <input type="email" value={this.state.userEmail} onChange={this.handleUserEmail}/>
                    </div>
                    <div>
                        <button type = "submit">Submit </button>
                    </div>
               </form>
            </div>
        )
    }
}

export default UserForm
