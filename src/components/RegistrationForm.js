import React, { Component } from 'react'


class RegistrationForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             email:'',
        }
    }
    nameEvent = (event)=>{
        this.setState({
            name:event.target.value 
        })
    }
   formAction = (event)=>{
       alert(`${this.state.name}`)
       event.preventDefault()
   }
    
    render() {
        return (
            <div>
                <form onSubmit = {this.formAction}>
                    <div>
                        <label>Name</label>
                        <input type="text" value={this.state.name} onChange={this.nameEvent} />
                        <input type="submit" value="Get Register"/>
                    </div>       
                </form>
                        
            </div>
        )
    }
}

export default RegistrationForm
