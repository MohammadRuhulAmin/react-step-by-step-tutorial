import React,{Component} from 'react'

class EventClick extends Component{
    handler(){
        console.log("Okk!! ")
    }
    render(){
        return(
            <div>
                <button onClick={this.handler}>Click form class</button>
            </div>
        )
    }


}

export default EventClick 