import React from 'react'
import "./experience.css"
import {BsPatchCheckFill} from "react-icons/bs"
const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I Have</h5>
      <h2>MY Experience</h2>
       <div className="container experience_container">
        <div className="experience_frontend">
          <div className="experience_content">
            <article className='experience_details'>
                <BsPatchCheckFill className="experience_details-icons"/>
               <div> <h4>HTML</h4>
                <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience_details'>
                <BsPatchCheckFill className="experience_details-icons"/>
             <div>   <h4>CSS</h4>
                <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experience_details'>
                <BsPatchCheckFill className="experience_details-icons"/>
               <div> <h4>Bootstrap</h4>
                <small className='text-light'>Beginner</small></div>
            </article>
            <article className='experience_details'>
                <BsPatchCheckFill className="experience_details-icons"/>
                <div><h4>React</h4>
                <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experience_details'>
                <BsPatchCheckFill className="experience_details-icons"/>
               <div> <h4>SCSS</h4>
                <small className='text-light'>Beginner</small></div>
            </article>
            <article className='experience_details'>
                <BsPatchCheckFill className="experience_details-icons"/>
               <div> <h4>Tailswind CSS</h4>
                <small className='text-light'>Beginner</small></div>
            </article>
          </div>
        </div>
        <div className="experience_content">
        <article className='experience_details'>
                <BsPatchCheckFill className="experience_details-icons"/>
               <div> <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experience_details'>
                <BsPatchCheckFill className="experience_details-icons"/>
                <div> <h4>Node Js</h4>
                <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experience_details'>
                <BsPatchCheckFill className="experience_details-icons"/>
                <div>  <h4>MongoDb</h4>
                <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experience_details'>
                <BsPatchCheckFill className="experience_details-icons"/>
                <div>  <h4>Express</h4>
                <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experience_details'>
                <BsPatchCheckFill className="experience_details-icons"/>
                <div>  <h4>Postgres</h4>
                <small className='text-light'>Beginner</small></div>
            </article>
            <article className='experience_details'>
                <BsPatchCheckFill className="experience_details-icons"/>
                <div><h4>Python</h4>
                <small className='text-light'>Beginner</small></div>
            </article>
            <article className='experience_details'>
                <BsPatchCheckFill className="experience_details-icons"/>
                <div><h4>API Testing</h4>
                <small className='text-light'>Beginner</small></div>
            </article>       
            <article className='experience_details'>
                <BsPatchCheckFill className="experience_details-icons"/>
                <div><h4>Postman</h4>
                <small className='text-light'>Intermediate</small></div>
            </article>       
        </div>
       </div>
    </section>
  )
}

export default Experience