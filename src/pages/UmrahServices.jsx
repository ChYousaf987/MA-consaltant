import React from "react";
import Navbar from "../compounent/Navbar";
import ContactUs from "../compounent/ContactUs";
import Footer from "../compounent/Footer";
import UmrahMain from "../compounent/UmrahMain";
import UmrahForm from "../compounent/UmrahForm";
import Clint from "../compounent/Clint";

const UmrahServices = () => {
  return (
    <>
      <Navbar />
      <UmrahMain />
      <UmrahForm />
      <Clint />

      <ContactUs />
      <Footer />
    </>
  );
};

export default UmrahServices;
