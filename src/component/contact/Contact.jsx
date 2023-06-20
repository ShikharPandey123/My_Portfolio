import React from "react";
import "./contact.css";
import {MdOutlineAttachEmail} from "react-icons/md";
import {AiFillMessage} from "react-icons/ai";
import {IoLogoWhatsapp} from "react-icons/io";
import{ useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xfx17mw', 'template_797bqt5', form.current, 'icfafpNeP4IOcVXWP');
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
            <h5>akshat.srajan@gmail.com</h5>
            <a href="mailto:akshat.srajan@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
            <AiFillMessage className="contact_options-icon"/>
            <h4>Messenger</h4>
            <h5>Akshat Mishra</h5>
            <a href="https://m.me/akshat.mishra" target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
            <IoLogoWhatsapp className="contact_options-icon"/>
            <h4>WhatsApp</h4>
            <h5>933*****91</h5>
            <a href="https://api.whatsapp.com/send?phone=+919336183391" target="_blank">Send a message</a>
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
