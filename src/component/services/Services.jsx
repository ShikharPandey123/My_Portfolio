import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        
        {/* Programming Services */}
        <article className="service">
          <div className="service_head">
            <h3>Programming</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Experienced in C++ programming.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Skilled in optimizing code for better performance.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Solid understanding of Data Structures and Algorithms.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Proficient in writing clean, concise, and efficient code.</p>
            </li>
          </ul>
        </article>

        {/* Web Development Services */}
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Proficient MERN stack developer (MongoDB, Express, React, Node.js).</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Develop robust, scalable server-side APIs.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Design and implement RESTful APIs for data handling and manipulation.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Ensure backend security through authentication (JWT, OAuth) and protection (Helmet).</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Create responsive, user-friendly web interfaces using React.js and Next.js.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Experience with various databases such as MongoDB, PostgreSQL, and Firebase.</p>
            </li>
          </ul>
        </article>

        {/* App Development Services */}
        <article className="service">
          <div className="service_head">
            <h3>App Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Expertise in React Native and Expo for mobile app development.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Build and deploy cross-platform mobile apps for Android and iOS.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Integrate APIs seamlessly for enhanced user experiences.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Focus on performance optimization and usability in mobile applications.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
