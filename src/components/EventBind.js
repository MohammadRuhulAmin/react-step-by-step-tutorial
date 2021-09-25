import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message :"Hi THis is Ruhul AMin ",
        }
        this.messageChange = this.messageChange.bind(this)
    }

    
    messageChange(){
        this.setState({
            message:"Good Bye Ruhul !", 
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div> 
                <button onClick={this.messageChange}>Event Bind Click </button> 
            </div>
        )
    }
}

export default EventBind
