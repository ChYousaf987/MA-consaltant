import React from "react";
import Navbar from "../compounent/Navbar";
import AboutMain from "../compounent/AboutMain";
import WhoWeAre from "../compounent/WhoWeAre";
import ContactUs from "../compounent/ContactUs";
import Footer from "../compounent/Footer";
import Trusted from "../compounent/Trusted";
import MeetOurTeam from "../compounent/MeetOurTeam";

const About = () => {
  return (
    <>
      <Navbar />
      <AboutMain />
      <WhoWeAre />
      <Trusted />
      <MeetOurTeam />

      <ContactUs />
      <Footer />
    </>
  );
};

export default About;
