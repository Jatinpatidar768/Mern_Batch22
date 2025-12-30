import { useState } from "react"


function App() {

  // we should not do it 
  // let userName = "Jagmohan";


  // useState() hooks-> use state is a hook which is return array of 2 parameters 1st is initial state of the component and
  // 2nd parameter is a fucntion which is used to change the state of the compoment 

  let [userName, setUserName] = useState("jagmohan");

  // function changeUserName() {
  //   console.log(userName)
  //   userName = "RamLakhan"
  //   console.log(userName)
  // }

  function changeUserName() {

    console.log(userName)
    setUserName("RamLakhan")
    console.log(userName)
  }
  console.log("Outer",userName)

  return (
    <div>
      <h1>This is heading tag in App components</h1>
      <p>This is the state of app component <mark>{userName}</mark></p>

      {/* this is bad way * */}
      {/* <button onClick={changeUserName()}>Change User Name</button> this is bad way */}
      {/* this is bad way but works fine but we dont do it */}
      {/* <button onClick={changeUserName}>Change User Name</button> */}
      {/* Right Syntex  */}
      <button onClick={() => changeUserName()}>Change User Name</button>
      {/* <button onClick={() => { changeUserName() }}>Change User Name</button> */}

    </div>
  )
}
export default App;
