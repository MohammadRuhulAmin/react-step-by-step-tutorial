import React, { Component } from 'react'

class HookChild extends Component {



    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        console.log('Constructor HookChild')
    }
    
    static getDerivedStateFromProps(props,state){
        console.log('HookChild getDerivedStateFromProps')
    }

    componentDidMount(){
        console.log('HookChild componentDidMount')
        return null
    }
    

    render() {
        console.log('HookChild render ')
        return (
            <div>
                
            </div>
        )
    }
}

export default HookChild
