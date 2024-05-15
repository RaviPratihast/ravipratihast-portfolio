import React from "react";
import "./About.css"; // Import CSS file for styling
import ProfileImage from "../../Asset/Ravi Shankar Pratihast.jpeg";

function About() {
  return (
    <section className="about-section">
      <h1 className="about-header">About Me</h1>
      <div className="container">
        <div className="about-content">
          <div className="profile-image-container">
            <img src={ProfileImage} alt="Profile" className="about-image" />
          </div>
          <div className="about-text">
            {/* <h2>About Me</h2> */}
            <p>
              I am a beginner with experience in JavaScript, React, HTML, and
              CSS. I have been learning and working on web development projects
              to enhance my skills and knowledge.
            </p>
            <h3>Skills</h3>
            <div className="skills-list">
              <div className="skill">
                <span>JavaScript</span>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
              <div className="skill">
                <span>React</span>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
              <div className="skill">
                <span>React Router</span>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>
              <div className="skill">
                <span>HTML</span>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
              <div className="skill">
                <span>CSS</span>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>
              <div className="skill">
                <span>TailwindCSS</span>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>
              <div className="skill">
                <span>Git & Github</span>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
