import React, { useState } from 'react'

function Two(){
    const[user2,setUser2]=useState("Jatin")

    return (
      <div>One component<mark>{user2}</mark>
      <button onClick={()=>{
        setUser2("One complete")
      }}>Change user2

      </button>
        
      </div>
    )
  }


export default Two