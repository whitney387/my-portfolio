import "./Education.css";

export default function Education() {
  return (
    <div className="education-page">
      <section id="education" className="container py-5">
        <h2>Education & Certifications</h2>
        
        <div className="education-grid">
          {/* Degree */}
          <div className="education-item">
            <div className="edu-header">
              <span className="edu-date">2022 - Present</span>
              <h3>BSc. Economics</h3>
            </div>
            <p className="edu-institution">Jomo Kenyatta University of Agriculture and Technology</p>
          </div>

          {/* SheCodes */}
          <div className="education-item">
            <div className="edu-header">
              <span className="edu-date">2024</span>
              <h3>Front-End Developer Diploma</h3>
            </div>
            <p className="edu-institution">SheCodes</p>
            <p className="edu-details">React.js, JavaScript (ES6+), and Responsive Web Development</p>
          </div>

          {/* ALX */}
          <div className="education-item">
            <div className="edu-header">
              <span className="edu-date">2024</span>
              <h3>AICE Program</h3>
            </div>
            <p className="edu-institution">ALX</p>
            <p className="edu-details">Focusing on Creativity, AI tools, and digital productivity</p>
          </div>
        </div>
      </section>
    </div>
  );
}
