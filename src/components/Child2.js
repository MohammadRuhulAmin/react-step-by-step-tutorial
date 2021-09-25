import React ,{Component} from "react"


class Child2 extends Component{
    render(){
        const {name,contact} = this.props
        return(
            <div>
                <p>{this.props.name} +++ {this.props.contact}</p>
                <p>CHild 2 </p>

            </div>
        )
    }


}

export default Child2