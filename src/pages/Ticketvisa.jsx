import React from 'react'
import Navbar from '../compounent/Navbar';
import Clint from '../compounent/Clint';
import Footer from '../compounent/Footer';
import ContactUs from '../compounent/ContactUs';
import StudyvisaForm from '../compounent/StudyvisaForm';
import VisaMain from '../compounent/VisaMain';

const Ticketvisa = () => {
  return (
    <>
      <Navbar />
      <VisaMain />
      <StudyvisaForm />
      <Clint />

      <ContactUs />
      <Footer />
    </>
  );
}

export default Ticketvisa