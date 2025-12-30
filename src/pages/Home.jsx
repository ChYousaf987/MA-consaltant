import React from 'react'
import ServiceOffer from '../compounent/ServiceOffer'
import Help from '../compounent/Help'
import Clint from '../compounent/Clint'
import ContactUs from '../compounent/ContactUs'
import Footer from '../compounent/Footer'
import HeroSection from '../compounent/HeroSection'

const Home = () => {
  return (
    <>
    <div className="">
    <HeroSection/>
    <ServiceOffer/>
    <Help/>
    <Clint/>
    <ContactUs/>
    <Footer/>
    </div>
    </>
  )
}

export default Home