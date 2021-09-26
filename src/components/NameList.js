import React from 'react'

const NameList = function(){

    const names = ['Ruhul Amin','Sakib Hasan','Sajid Hasan','Nurul Islam']
    const listOfNames = names.map(name => <h1>{name}  "is an Employee" </h1>)
    return (listOfNames)


}

export default NameList