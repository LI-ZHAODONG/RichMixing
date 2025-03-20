import React from "react";
import "./About.css"; // Import the CSS file
import videoBg from "../assets/videobg.mp4"; // Import the video file
import RichLee from "../assets/RichLee.png";
import Navbar from "../components/navbar"; // Import Navbar

function About() {
  return (
    <>
      <Navbar /> {/* Keep Navbar at the top */}
      <video autoPlay loop muted playsInline className="videobg">
        <source src={videoBg} type="video/mp4" />
      </video>

      <div className="intro">
        <h1>
          <img src={RichLee} alt="RichLee" className="RichLee" />
          <span className="desc">Solo hip-hop artist & producer<br /> International student from China, based in Stuttgart, Germany</span><br />
        </h1>
      </div>
    </>
  );
}

export default About;