import React,{Component} from 'react'

class Welcome extends Component{
    constructor(){
        super()

    }
    render(props){
        //disstructing props 
        //const {college} = this.props 
        //const {state1,state2} = this.state
        return(
            <div>
                <p>Props are immutable !! u can not change props element  , (use setState ! )</p>
                <h1>  College From  {this.props.college} </h1>
            </div>
            
        )
    }
}

export default Welcome 