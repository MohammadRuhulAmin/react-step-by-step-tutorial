import React from 'react'
import './Error.css'
import FriendStyle from './Success.module.css'

const FriendList = ()=>{

    const FriendsName = ['Sakib','Mariam' , 'Sajid','Ashraf']
   const friend = FriendsName.map((friend,index) => <h1 key={index}> {1+index} {friend}</h1>)
    return (
        <div className={FriendStyle.success}>
            {
            friend
        }
        </div>
        
    )



}


export default FriendList 