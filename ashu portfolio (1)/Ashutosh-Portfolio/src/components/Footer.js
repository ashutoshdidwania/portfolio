import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  // let date = new Date();
  // let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        {/* <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Jatin Sharma</h3>
        </Col> */}
        {/* <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} JS</h3>
        </Col> */}
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://bit.ly/3z9u0lq"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                {/* <FaLinkedinIn /> */}
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/jatin-shrm"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                {/* <AiFillGithub /> */}
              </a>
            </li>
            
            {/* <li className="social-icons">
              <a
                href="https://twitter.com/Soumyajit4419"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li> */}
            
            {/* <li className="social-icons">
              <a
                href="https://www.instagram.com/soumyajit4419"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li> */}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
