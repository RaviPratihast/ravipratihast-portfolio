import React from "react";
import "./Hero.css";
import ProfileImage from "../../Asset/Ravi Shankar Pratihast.jpeg";
const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <img src={ProfileImage} alt="Profile" className="profile-image" />
          <h1>
            I am <span>Ravi Shankar Pratihast</span>
          </h1>
          <p>Frontend Developer based in India.</p>
          <div className="action-buttons">
            <button className="action-btn action-connect">
              Connect with Me
            </button>
            <button className="action-btn action-resume">My Resume</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
