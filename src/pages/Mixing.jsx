import React from "react";
import Navbar from "../components/navbar.jsx"; // Use the same Navbar
import "./Mixing.css";
import mixingBG from "../assets/mixingBG__.jpeg";

function Mixing() {
  return (
    <>
      <Navbar />
      <img src={mixingBG} alt="mixingBG" className="mixingBG" />
    </>
  );
};

export default Mixing;