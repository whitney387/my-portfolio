import "./Projects.css";
// 1. IMPORT YOUR IMAGES HERE
import generatorImg from "./generator.jpg"; 
import clockImg from "./clock.jpg";
import baseballImg from "./baseball.jpg";

export default function Projects() {
  const myProjects = [
    {
      title: "Weather App",
      description: "A real-time weather application built with React, featuring live API data integration.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_5ybCkoFWT2ZAVObRnsXSMmAc7ZwaXrT0XQ&s",
      link: "https://app.netlify.com/sites/a-react-weatherapp/",
      tech: "React"
    },
    {
      title: "AI Poem Generator",
      description: "Creative AI tool that generates English poems using advanced API integration.",
      image: generatorImg, // Use the imported variable name (no quotes)
      link: "https://poem-generatorss.netlify.app/", 
      tech: "React / AI API"
    },
    {
      title: "World Clock",
      description: "Interactive time-tracking app with city search and dynamic background updates.",
      image: clockImg, // Use the imported variable name
      link: "https://world-clocks-js.netlify.app/",
      tech: "JavaScript"
    },
    {
      title: "Baseball Bucket List",
      description: "A highly responsive landing page showcasing mobile-first design and clean UI.",
      image: baseballImg, // Use the imported variable name
      link: "https://baseball-bucket-list.netlify.app/",
      tech: "HTML / CSS"
    },
    {
      title: "Interactive Portfolio",
      description: "Dynamic personal portfolio focusing on DOM manipulation and user experience.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHmF6_aWKHMdZGpwTRXog9y94f3g8nF8St1A&s",
      link: "https://preeminent-gaufre-aaef7f.netlify.app/",
      tech: "JavaScript"
    }
  ];

  return (
    <section id="projects" className="container py-5">
      <h2 className="text-center mb-5">Technical Projects</h2>
      <div className="row g-4">
        {myProjects.map((project, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div className="card h-100 project-card">
              <div className="image-container">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                />
                <div className="tech-badge">{project.tech}</div>
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">{project.title}</h5>
                <p className="card-text text-muted">{project.description}</p>
                <a
                  href={project.link}
                  className="btn btn-primary mt-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
