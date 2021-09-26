import React from 'react'
import './UserStyle.css' 

function UserStatus(props) {
    let className = props.status ?'status' :''
    return (
        <div>
            <h1  className = {`${className} font-xl`}>Ruhul Amin </h1>
        </div>
    )
}

export default UserStatus
