import "./Interests.css";
export default function ContactMe() {
  return (
    <div>
      <section id="contact" className="container py-5">
        <h2>Contact Me</h2>
        <ul>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:mmaitsimurugi@gmail.com">
              Mmaitsimurugi@gmail
            </a>
          </li>
          <li>
            <strong>Phone:</strong> +254 748 011240
          </li>
          <li>
            <strong>LinkedIn:</strong>
            <a
              href="https://www.linkedin.com/in/whitney-mmaitsi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/whitney-mmaitsi
            </a>
          </li>
        </ul>
        <h3>Send Me a Message</h3>
        <form action="#" method="POST">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Your Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Your Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Your Message
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
