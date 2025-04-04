import "./Interests.css";
export default function Projects() {
  return (
    <div>
      <section id="projects" className="container py-5">
        <h2>My Projects</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_5ybCkoFWT2ZAVObRnsXSMmAc7ZwaXrT0XQ&s"
                className="card-img-top"
                alt="weather Project"
              />
              <div className="card-body">
                <h5 className="card-title">Weather APP</h5>
                <p className="card-text">This project is created by React.</p>
                <a
                  href="https://app.netlify.com/sites/a-react-weatherapp/"
                  className="btn btn-primary"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHmF6_aWKHMdZGpwTRXog9y94f3g8nF8St1A&s"
                className="card-img-top"
                alt="Project 2"
              />
              <div className="card-body">
                <h5 className="card-title">Portfolio</h5>
                <p className="card-text">project made by Javascript.</p>
                <a
                  href="https://app.netlify.com/sites/funny-nougat-dbd87d/"
                  className="btn btn-primary"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src="data:image/jpeg;base64,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"
                alt="Project 3"
              />
              <div className="card-body">
                <h5 className="card-title">Practice project</h5>
                <p className="card-text">
                  project created by Javascript and html.
                </p>
                <a
                  href="https://reliable-sprite-fca025.netlify.app/"
                  className="btn btn-primary"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
