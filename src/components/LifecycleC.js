import React, { Component } from 'react'

class LifecycleC extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'ruhul amin ',
        }
        console.log('Lifecycle C Constroctor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('Lifecycle C getDerivedStateFromProps')
    }
    
    componentDidMount(){
        console.log('Lifecycle C ComponentDidMount')
        return null 
    }

    render() {
        console.log('Lifecycle C from render')
        return (
            <div>

            </div>
        )
    }
}

export default LifecycleC
