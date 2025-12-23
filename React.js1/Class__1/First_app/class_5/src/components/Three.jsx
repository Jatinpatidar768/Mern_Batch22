import React, { useState } from 'react'

function Three(){
    const[user3,setUser3]=useState("patidar")

    return (
      <div>One component<mark>{user3}</mark>
      <button onClick={()=>{
        setUser3("One complete")
      }}>Change user2

      </button>
        
      </div>
    )
  }


export default Three