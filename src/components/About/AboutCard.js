import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sasadhri Rao </span>
            from <span className="purple"> Kuala Lumpur, Malaysia.</span>
            <br />I am a junior dev who is inspired by new technologies and always excited to work on new projects.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> An avid music lover, from Zakir Hussain to Travis Scott
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing, it could be in my blog or my journal
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography, my guilty pleasure
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Any product that needs a manual to work is broken"{" "}
          </p>
          <footer className="blockquote-footer">Elon Musk</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
