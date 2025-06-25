import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/login_page_indibus.png";
import IMG3 from "../../assets/music_academy.png";
import IMG4 from "../../assets/Food-Order.png";
import IMG2 from "../../assets/job_connect.png";

const Portfolio = () => {
  const data = [
     {
      id: 1,
      image: IMG1,
      title: "Indibus Website Frontend",
      github: "https://github.com/ShikharPandey123/ceo-client.git",
      demo: "https://github.com/ShikharPandey123/ceo-client.git",
    },
    {
      id: 2,
      image: IMG2,
      title: "Job Application Portal",
      github: "https://github.com/ShikharPandey123/Job-Application-MERN.git",
      demo: "https://github.com/ShikharPandey123/Job-Application-MERN.git",
    },
     {
      id: 3,
      image: IMG3,
      title: "Next.JS Dashboard",
      github: "https://github.com/ShikharPandey123/Music-Academy.git",
      demo: "https://music-academy-xrkr.vercel.app/",
    },
    {
      id: 4,
      image: IMG4,
      title: "Food-Ordering-Website",
      github: "https://github.com/ShikharPandey123/ceo-client/tree/shikhar",
      demo: "https://github.com/ShikharPandey123/ceo-client/tree/shikhar",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => (
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
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
