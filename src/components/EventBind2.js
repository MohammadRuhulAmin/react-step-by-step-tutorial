import React ,{Component} from 'react'

class EventBind2 extends Component{
    constructor(props){
        super(props);
        this.state = {
            message:"Event Binding is on fire "
        }
        this.changeMessage = this.changeMessage.bind(this) 
        // binding in the class constructor ! 
    }
    changeMessage(){
        this.setState({
            message :"OK MESSAGE CHANGED@@"
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.changeMessage}>change message</button>
            </div>
        )
    }


}

export default EventBind2 