import React from 'react'
import Navbar from '../compounent/Navbar'
import ServiceOffer from '../compounent/ServiceOffer'
import Help from '../compounent/Help'
import Clint from '../compounent/Clint'

const Home = () => {
  return (
    <>
    <div className="">
    <Navbar/>
    <ServiceOffer/>
    <Help/>
    <Clint/>
    </div>
    </>
  )
}

export default Home