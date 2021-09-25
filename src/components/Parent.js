import React  from "react"
import Child from "./Child"
import Child2 from "./Child2"

const Parent = ()=>{
    return(
        <div>
            <h1>Parent </h1>
            <Child2 name="Sakib Hasan" contact="Sajid hasan"/>
            <Child name="Ruhul Amin" contact = "01322352864"/>
        </div>
    )

}

export default Parent 
