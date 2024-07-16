import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Services from "./Pages/Services";
import ContactUs from "./Pages/ContactUs";
import Login from "./Pages/Login";
import RightImageCard from "./Components/RightImageCard";
import LeftImageCard from "./Components/LeftImageCard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/imagecard" element={<RightImageCard />} />
        <Route path="/leftimagecard" element={<LeftImageCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
