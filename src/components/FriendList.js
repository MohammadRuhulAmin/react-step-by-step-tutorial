import React from 'react'


const FriendList = ()=>{

    const FriendsName = ['Sakib','Mariam' , 'Sajid','Ashraf']
   const friend = FriendsName.map((friend,index) => <h1 key={index}> {1+index} {friend}</h1>)
    return (
        <div>
            {
            friend
        }
        </div>
        
    )



}


export default FriendList 