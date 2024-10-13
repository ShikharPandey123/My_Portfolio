import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png"; // Image for Exam Portal
import IMG2 from "../../assets/portfolio2.png"; // Image for ConnectR
import IMG3 from "../../assets/portfolio3.png"; // Image for MedScheduler
import IMG4 from "../../assets/portfolio4.png"; // Image for Hymm-A Music App
import IMG5 from "../../assets/portfolio5.png"; // Image for Cn Shopping
import IMG6 from "../../assets/portfolio6.png"; // Image for Attendance Portal
import IMG7 from "../../assets/portfolio7.png"; // Image for My Linkedin Chrome Extension
const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Exam Portal",
      github: "https://github.com/AKsHaT123456A/Portal_",
      demo: "https://csiexamm.vercel.app/",
    },
    {
      id: 2,
      image: IMG3,
      title: "ConnectR",
      github: "https://github.com/AKsHaT123456A/connectr",
      demo: "https://connectr.onrender.com/",
    },
    {
      id: 3,
      image: IMG5,
      title: "MedScheduler",
      github: "https://github.com/AKsHaT123456A/Amrutam",
      demo: "https://drive.google.com/file/d/1IKNAL-Dc7ce-pSYiV6XUksMmmL2aehIf/view?usp=drivesdk",
    },
    {
      id: 5,
      image: IMG7,
      title: "Linkedin Message Extension",
      github: null,
      demo: "https://www.loom.com/share/2a3fca8b6f774f22b69fe0bedc7268d6?sid=d41f8a1e-5b1b-4f5a-b6ff-5da1ac43d2fb",
    },
  
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <a
                href={github}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href={demo}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
