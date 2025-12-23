import React, { useState } from 'react'

function One(){
    const[user1,setUser1]=useState("patidar")

    return (
      <div>One component<mark>{user1}</mark>
      <button onClick={()=>{
        setUser1("One complete")
      }}>Change user2

      </button>
        
      </div>
    )
  }


export default One