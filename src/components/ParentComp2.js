import React, { Component } from 'react'

import ChildComp2 from './ChildComp2'

class ParentComp2 extends Component {
    constructor(props){
        super(props)
        this.state = {
            parentName :"NURUL ISLAM"
        }
        this.clickHandle = this.clickHandle.bind(this) 
    }
    clickHandle(childName){
        alert(`hi ${this.state.parentName} ${childName} `) 
    }
    render() {
        return (
            <div>
                <ChildComp2 clickME={this.clickHandle}/>
            </div>
        )
    }
}

export default ParentComp2
