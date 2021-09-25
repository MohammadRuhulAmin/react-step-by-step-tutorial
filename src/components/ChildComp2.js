import React from 'react'

function ChildComp2(props) {
    return (
        <div>
            <h3>This is ChildComp2</h3> 
            <button onClick = {()=>props.clickME('Ruhul Amin')}>CLICK FOR ATTENTION </button>
        </div>
    )
}

export default ChildComp2
