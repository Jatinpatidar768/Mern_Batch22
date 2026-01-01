
import One from './components/One'
import UserCard from './components/UserCard'

function App() {
  const Data = {
    id: 101,
    name: "Jagmohan Rai",
    age: "25"
  }
  return (
    <div>
     <One Data={Data}></One>
    </div>
  )
}

export default App