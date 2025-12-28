import React from 'react'
import Navbar from '../compounent/Navbar'
import ServiceOffer from '../compounent/ServiceOffer'
import Help from '../compounent/Help'
import Clint from '../compounent/Clint'
import ContactUs from '../compounent/ContactUs'
import Footer from '../compounent/Footer'

const Home = () => {
  return (
    <>
    <div className="">
    <Navbar/>
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