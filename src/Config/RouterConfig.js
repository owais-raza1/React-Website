import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "../components/Pages/SignUp/SignUp";
import Home from "../components/Pages/Home/Home";
import Login from "../components/Pages/Login/Login";
import Brand from "../components/Pages/Brand/Brand";
import Contact from "../components/Pages/Contact/Contact";
import Tour from "../components/Pages/Tour/Tour";

function RouterConfig() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tour" element={<Tour />} />
        </Routes>
      </Router>
    </div>
  );
}

export default RouterConfig;