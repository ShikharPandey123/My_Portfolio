import React from "react";
import "./portfolio.css";
import IMG2 from "../../assets/Task_Manager.png";
import IMG3 from "../../assets/Food-Order.png";

const Portfolio = () => {
  const data = [
    {
      id: 2,
      image: IMG2,
      title: "Task Manager Web App",
      github: "https://github.com/ShikharPandey123/Task-and-Event_Manager_Web_App.git",
      demo: "https://react-router-demo-project-khaki.vercel.app/",
    },
    {
      id: 3,
      image: IMG3,
      title: "Food-Ordering-Website",
      github: "https://github.com/ShikharPandey123/Food-Order-Web-App.git",
      demo: "https://food-order-web-app-pi.vercel.app/",
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
