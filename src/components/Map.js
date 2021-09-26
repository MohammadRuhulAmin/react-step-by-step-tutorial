import React from 'react'

const Map = function (){
    const userId = [111,231,221,1122]
    const userId_calc = userId.map( id=> id*100) 
    return(
      <div>
          <h1>{userId_calc[1]}</h1>
          {
              userId_calc.map(id => <h2> { id*100} </h2>)
          }
      </div>
    )

}

export default Map 