import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ThisBar from "./ThisBars";
import Home from "./Homes";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Education from "./Education";
import Interests from "./Interests";
import ContactMe from "./ContactMe";
import myCv from "./frontenddeveloper.pdf";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <ThisBar />
        
        <main className="container py-5">
          {/* Header Section */}
          <header className="text-center mb-5">
            <h1 className="display-3 fw-bold name-title">Whitney Mmaitsi</h1>
            <p className="text-muted">Junior Front-End Developer & Economics Student</p>
          </header>

          {/* Navigation Routes */}
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/AboutMe" element={<AboutMe />} />
            <Route path="/Education" element={<Education />} />
            <Route path="/Interests" element={<Interests />} />
            <Route path="/ContactMe" element={<ContactMe />} />
          </Routes>

          {/* Call to Action */}
          <div className="d-flex justify-content-center my-5">
      <a
        // 2. Use the variable name in the href
        href={myCv}
        className="btn-cv"
        target="_blank"
        rel="noopener noreferrer"
      >
        View My CV
      </a>
    </div>
        </main>

        <footer className="footer-section">
          <div className="container text-center">
            <p>
              This code is open-sourced on{" "}
              <a href="https://github.com/whitney387/my-portfolio" target="_blank" rel="noreferrer">
                GitHub
              </a>{" "}
              and hosted on{" "}
              <a href="https://this-portfolios.netlify.app/" target="_blank" rel="noreferrer">
                Netlify
              </a>
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}