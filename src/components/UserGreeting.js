import React, { Component } from 'react'

 class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            status : true 
        }
    }
    
    render() {
        // return this.state.status ? (<div>CCDFDDD</div>) : (<div>dsfkdsjf</div>)
        let message 
        if(this.state.status){
            message = <div>HI RUHUL AMIN</div>
        }
        else{
            message = <div>HI SAKIB HASAN</div>
        }

        return (
           <div>{message}</div> 
            
        )
    }
}

export default UserGreeting
