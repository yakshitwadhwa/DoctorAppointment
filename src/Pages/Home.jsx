import React from 'react'
import Header from '../Components/Header.jsx'
import DoctorCard from '../Components/DoctorCard.jsx'
import SpecialityMenu from '../Components/SpecialityMenu.jsx'
import Banner from '../Components/Banner.jsx'

const Home = () => {
  return (
    <div>
      <Header/>
      <SpecialityMenu/>
      <DoctorCard/>
      <Banner/>
    </div>
  )
}

export default Home
