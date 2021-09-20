import React,{Component} from 'react'

class Counter extends Component{
    constructor(){
        super()
        this.state = {
            counter:0 
        }
    }
    increment(){
        if(this.state.counter<=10){
            this.setState({
                counter: this.state.counter + 1 
            })
        }
        
    }
    decrement(){
        if(this.state.counter>=1){
            this.setState({
                counter:this.state.counter - 1 
            })
        }
    }

    render(){
        return(
            <div>
                <button onClick={()=>this.increment() }> + </button>
                <b>{ this.state.counter }</b>
                <button onClick={()=>this.decrement()}> - </button>
            </div>
        )
    }

}
export default Counter 