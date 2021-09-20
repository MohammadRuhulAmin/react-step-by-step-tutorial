import React from 'react'


// function Greet(){
//     return <h1>Hi Ruhul Amin</h1>
// }

const Greet = (props)=> {
    return (
        <div>
            <h1>Hi {props.name} </h1>
            <p>Email {props.email}</p>
            <p>{props.children}</p>
        
        </div>
    )
}


export default Greet  