import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log("Button clicked! ")
    }
    function clickTwo(){
        console.log("tow ");
    }
    return (
        <div>
            <button onClick={clickHandler}>Click Me  </button> 
            <button onClick={clickTwo}>Two </button>
        </div>
    )
}

export default FunctionClick
