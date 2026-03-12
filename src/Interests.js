import "./Interests.css";

export default function Interests() {
  const interests = [
    {
      title: "Web Development",
      description: "Building responsive and functional web applications using React and modern JavaScript.",
    },
    {
      title: "Data Analysis",
      description: "Applying analytical thinking to datasets and economic trends using tools like Excel and Stata.",
    },
    {
      title: "Problem-Solving",
      description: "Translating complex user needs into efficient, clean, and maintainable code solutions.",
    },
    {
      title: "UI/UX Design",
      description: "Focusing on clean, user-friendly, and accessible digital experiences.",
    },
    {
      title: "AI & Productivity",
      description: "Leveraging AI tools to enhance creativity and digital workflow efficiency.",
    },
    {
      title: "Continuous Learning",
      description: "Staying updated with emerging technologies in the ever-evolving tech landscape.",
    }
  ];

  return (
    <section id="interests" className="container py-5">
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold section-title">Professional Interests</h2>
        <p className="text-muted">Fields and technologies I am passionate about exploring and mastering.</p>
      </div>
      
      <div className="row g-4">
        {interests.map((item, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div className="interest-card h-100 p-4">
              <div className="accent-line"></div>
              <h3 className="h5 fw-bold mb-3">{item.title}</h3>
              <p className="mb-0 text-secondary small">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
