import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import About from "./pages/About";
import UmrahServices from "./pages/UmrahServices";
import Ticketvisa from "./pages/Ticketvisa";
import Styduvisa from "./pages/Styduvisa";
import Forgetpasswork from "./pages/Forgetpasswork";
import Contactus from "./pages/Contactus";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgetpassword" element={<Forgetpasswork />} />
          <Route path="/about" element={<About />} />
          <Route path="/umrah-service" element={<UmrahServices />} />
          <Route path="/studyvisa" element={<Styduvisa />} />
          <Route path="/ticketvisa" element={<Ticketvisa />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
