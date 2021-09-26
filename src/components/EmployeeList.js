import React from 'react'
import Employee from './Employee'
const EmployeeList = ()=>{

    const EmployeeInformation = [
        {
            id:1,
            name:"Ruhul Amin",
            email :"Ruhul@gmail.com"
        },
        {
            id:2,
            name:"Sakib Hasan",
            email:"Sakib@gmail.com"
        },
        {
            id:3,
            name:"Aynun Jaria Mariam Binte Ashraf",
            email:"Aynun@gmail.com"
        }
    ]
    const EmployeeList =  EmployeeInformation.map(employee => <Employee  key={employee.id} info = {employee} /> )
    return (
        <div>{EmployeeList}</div>
    )
    



}

export default EmployeeList 