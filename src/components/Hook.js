import React, { Component } from 'react'
import HookChild from './HookChild'

class Hook extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Ruhul amin',
        }
        console.log('Hook Constructor ')
    }
    
    static getDerivedStateFromProps(props,state){
        console.log('Hook getDerivedStateFromProps')
    }

    
    componentDidMount(){
        console.log('Hook componentDidMount')
        return null
    }

    shouldComponentUpdate(){
        console.log('Hook shouldComponentUpdate')
        return true 
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('Hook getSnapshotBeforeUpdate')
        return null 
    }
    componentDidUpdate(prevProps,prevState){
        console.log('Hook componentDidUpdate')
        return null 
    }
    
    changeName(){
        this.setState({
            name:'sakib Hasan', 
        })
    }
    render() {
        console.log('Hook render')
        return (
            <div>
                <h1>Hook! {this.state.name}</h1>  
                <button onClick={()=> this.changeName()}>Change State </button>
                 {/* <HookChild/>    */}
            </div>
        )
    }
}

export default Hook
