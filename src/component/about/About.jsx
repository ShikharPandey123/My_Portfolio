import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
// import Me from "../../assets/me1.png"
import Me1 from "../../assets/me3.png"
const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about-me">
          <div className="about_me-image">
            <img src={Me1} alt="" />
            {/* photo lgaani */}
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
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
        </div>
        <p>
            My name is Akshat Mishra,I'm a back-end developer based in Ghaziabad,Uttar Pradesh,India.I am currently an Back-end developer at Computer Society of India.I am developed many backend servers as well as frontend applications.
            <br/>
            I'm passionate about developing new user-friendly applications with beautiful interfaces.I'm also keen in learning new technologies and stacks.  
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
