import { Route, Routes } from 'react-router-dom'
import './App.css'
import React from 'react'
import Home from './Pages/Home.jsx'
import Doctor from './Pages/Doctor.jsx'
import Login from './Pages/Login.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import MyAppointment from './Pages/MyAppointment'
import Appointment from './Pages/Appointment.jsx'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]  text-primary">
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/doctors' element={<Doctor/>}></Route>
      <Route path='/doctors/:speciality' element={<Doctor/>}></Route>
      {/* // imp name should be same  */}

      <Route path='/login' element={<Login/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/my-appointments' element={<MyAppointment/>}></Route>
      <Route path='/appointments/:docId' element={<Appointment/>}></Route>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App
