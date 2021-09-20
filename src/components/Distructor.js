import React from 'react'

const Distructor = function({name,email}){
    // const {name, email} = props  ( or use as )
    return(
        <div>
            <p>Hi {name} , Your Email :  {email}</p>
        </div>
    )
}

export default Distructor 