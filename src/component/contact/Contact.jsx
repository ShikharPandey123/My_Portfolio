import React from "react";
import "./contact.css";
import {MdOutlineAttachEmail} from "react-icons/md";
import {AiFillMessage} from "react-icons/ai";
import { FaDiscord,FaLinkedin  } from "react-icons/fa";
import{ useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xfx17mw', 'template_797bqt5', form.current, process.env.API_KEY);
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact ME</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineAttachEmail className="contact_options-icon"/>
            <h4>Email</h4>
            <h5>shikhar2003.pandey@gmail.com</h5>
            <a href="mailto:shikhar2003.pandey@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
            <FaLinkedin  className="contact_options-icon"/>
            <h4>Linkedin</h4>
            <h5>Shikhar Pandey</h5>
            <a href="https://www.linkedin.com/in/shikhar-pandey-270545230/" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name " required />
          <input type="email" name="email" placeholder="your Email" required/>
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
