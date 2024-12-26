import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jatin Sharma </span>
            from <span className="purple"> Jaipur (Raj.), India.</span>
            <br /> I am a final year student pursuing an BTech (Bachelor of
            Technology) in Computer Science and Engeneering at ICFAI University,
            Jaipur.
            {/* <br />
            Additionally, I am currently employed as a software developer at
            Juspay.
            <br /> */}
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> GYM
            </li>
            <li className="about-activity">
              <ImPointRight /> Quantitative Finance
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Any fool can write code that a computer can understand. Good
            programmers write code that humans can understand"{" "}
          </p>
          <footer className="blockquote-footer">Jatin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
