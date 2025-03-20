import React from "react";
import Navbar from "../components/navbar.jsx"; // Use the same Navbar
import "./Mixing.css";
import example_vocal from "../assets/example_vocal.mp3";
import example_vocal_ from "../assets/example_vocal_.mp3";
import example_beatV from "../assets/example_beatV.mp3";
import example_beatV_ from "../assets/example_beatV_.mp3";

function Mixing() {
  return (
    <>
      <Navbar />
      <div className="mixingBG"></div>
      <div className="mixingPlan">
        <h1 className="mixingTitle">Mixing Service Plans</h1>
        <div className="below_word">
          <div className="Plans">
            <div className="Plan_Vocal">
              <p className="title">VOCAL & BEAT</p>
              <p className="desc">Vocal files mix with a single beat file.</p>
              <p className="price">€35 ~ 40</p>
            </div>
            <div className="Plan_All">
              <p className="title">VOCAL & INSTRUMENTS</p>
              <p className="desc">Vocal files mix with multiple instruments files.</p>
              <p className="price">€100</p>
            </div>
          </div>
          <div className="music-container">
            <h2>After Mixing</h2>

            <div className="music-item">
              <p>Vocal Mixing - Die For You</p>
              <audio controls>
                <source src={example_vocal} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>

            <div className="music-item">
              <p>Vocal Mixing - By Your Side</p>
              <audio controls>
                <source src={example_vocal_} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>

            <div className="music-item">
              <p>Vocal & Instruments - 5AM</p>
              <audio controls>
                <source src={example_beatV} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>

            <div className="music-item">
              <p>Vocal & Instruments Mixing - RAGE</p>
              <audio controls>
                <source src={example_beatV_} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mixing;