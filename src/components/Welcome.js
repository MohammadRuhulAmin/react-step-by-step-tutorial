import React,{Component} from 'react'

class Welcome extends Component{
    constructor(){
        super()

    }
    render(props){
        return(
            <div>
                <p>Props are immutable !! u can not change props element  , (use setState ! )</p>
                <h1>  College From  {this.props.college} </h1>
            </div>
            
        )
    }
}

export default Welcome 