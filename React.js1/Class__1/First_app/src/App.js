import React from 'react'
import { useState, useEffect } from 'react'

export default function App() {
    // let username="speed"
    // let [username, setusername] = useState("speed up");
    const [info, setinfo] = useState([]);
    async function callAPI() {

        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const ans = await res.json()
console.log("jatin");
console.log("hii");



        setinfo(ans);
    }
    useEffect(() => {
        callAPI();
    }, []);
    return (
        <div>
            <p>{info[0]?.title}</p>
           

        </div>
    )
}
