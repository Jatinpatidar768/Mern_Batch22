
import { Route, Routes } from 'react-router-dom'
import DonateKhoon from './components/DonateKhoon'
import CollectKhoon from './components/CollectKhoon'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import SingUp from './components/SignUp'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<DonateKhoon />} />
        <Route path="/collect" element={<CollectKhoon />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SingUp />} />

      </Routes>
      <Footer/>
    </div>
  )
}

export default App
