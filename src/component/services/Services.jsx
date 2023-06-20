import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Programmer</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>I am a C++ programmer.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>I can work for code optimization.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Currently learning about concepts of Data Structures and
                Algorithm.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                I can apply my programming skills as to write a concised code.
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>A MERN Developer.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>I can develope robust and scalable server-side APIs.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Can design and implement RESTful endpoints to handle data
                retrieval, storage, and manipulation.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Can ensure the security of the backend by implementing
                authentication and authorization mechanisms, such as JSON Web
                Tokens (JWT) or OAuth.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Using React.js, i can built user-friendly and responsive web
                interfaces.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                As a MERN developer i can work on many databases like
                MongoDb,PostgreSQL,and/or firebase.
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>Open Source Contributor</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>I am a active Open Source Contributor.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>A active participant of GirlScript Summer of Code.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>I have been working as a team,with 5+ PRs merged.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
