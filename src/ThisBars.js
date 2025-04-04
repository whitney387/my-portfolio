import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
export default function ThisBar() {
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Portfolio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="Home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="./AboutMe">
              About Me
            </Nav.Link>
            <Nav.Link as={Link} to="./Projects">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="./Education">
              Education
            </Nav.Link>
            <Nav.Link as={Link} to="./Interests">
              Interests
            </Nav.Link>
            <Nav.Link as={Link} to="./ContactMe">
              Contact Me
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
