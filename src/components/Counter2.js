import React ,{Component} from 'react' 

class Counter2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0,
        }
    }
    increment(){
        this.setState({
            count : this.state.count+1,
        },
        ()=>{
            console.log("This is for increment ! ");
        }
        )
    }
    decrement(){
        this.setState({
            count :this.state.count-1, 
        },()=>{
            console.log("call back operation ! ")
        }
        )
    }
    render(){
        return(
            <div>
                <button onClick={()=>this.increment()}>+</button>
                <h1>{this.state.count} </h1>
                <button onClick={()=>this.decrement()}>-</button>
            </div>
        )
    }


}

export default Counter2 