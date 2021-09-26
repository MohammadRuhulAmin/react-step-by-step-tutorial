import React from 'react'

function Employee(props) {
    return (
        <div>
            {props.name}
            {props.id}
            {props.email}
        </div>
    )
}

export default Employee
