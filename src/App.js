import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ThisBar from "./ThisBars";
import Home from "./Homes";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Education from "./Education";
import Interests from "./Interests";
import ContactMe from "./ContactMe";
import "./Interests.css";

export default function App() {
  return (
    <div>
      <Router>
        <ThisBar />
        <div className="text-primary">
          <h1 className="text-center text-dark fs-1">Whitney Mmaitsi</h1>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/AboutMe" element={<AboutMe />} />
            <Route path="/Education" element={<Education />} />
            <Route path="/Interests" element={<Interests />} />
            <Route path="/ContactMe" element={<ContactMe />} />
          </Routes>
          <footer>
            <p className="text-center text-dark">
              This code is open-sourced in{" "}
              <a href="https://github.com/whitney387/my-portfolio">github</a>{" "}
              and hosted on <a href="/">Netlify</a>
            </p>
          </footer>
        </div>
      </Router>
    </div>
  );
}
