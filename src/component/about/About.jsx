import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import Me1 from "../../assets/Shikhar.jpg";
const About = () => {
  return (
    <section id="about" style={{ "margin-top": "4rem" }}>
      <h5 style={{ width: "100%" }}> Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about-me">
          <div className="about_me-image">
            <img src={Me1} alt="" />
          </div>
        </div>
        <div className="about_content">
          {/* <div className="about_cards">
            <article className="about_card">
              <FaAward id="about_icon" />
              <h5>Experience</h5>
              <small>6+months</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>5+clients</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary id="about_icon" />
              <h5>Projects</h5>
              <small>10+ completed Projects</small>
            </article>
          </div> */}
          <p style={{ padding: "12px" }}>
            I'm Shikhar Pandey, a MERN Stack Developer based in Ghaziabad, India. Proficient in MongoDB, Express.js, React.js, and Node.js, along with tools like TailwindCSS, ShadCN, and Redux, I specialize in building full-stack web applications with clean, scalable code. I'm passionate about developing seamless user experiences and constantly exploring new technologies to level up my skills.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>

        </div>
      </div>
    </section>
  );
};

export default About;
