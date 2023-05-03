import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import hoobank from "../../Assets/Projects/hoobank.png";
import twitter from "../../Assets/Projects/twitter.png";
import tesla from "../../Assets/Projects/tesla.png";
import Ecommcerce from "../../Assets/Projects/headphones.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hoobank}
              isBlog={false}
              title="Website of a Futuristic Bank"
              description="Built with React, used tailwind-css for styling and added responsiveness."
              ghLink=""
              demoLink= "https://hoobank-three-theta.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twitter}
              isBlog={false}
              title="Twitter Clone"
              description="In progress..."
              ghLink="https://github.com/santiagorao12/twitter-clone"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
  <ProjectCard
    imgPath={tesla}
    isBlog={false}
    title="Tesla Clone"
    description="Built with React, Redux for state management, Material UI for icons and React-reveal for Customization."
    ghLink="https://github.com/santiagorao12/tesla"
    demoLink="https://aquamarine-pudding-4cdc8d.netlify.app/"
  />
</Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecommcerce}
              isBlog={false}
              title="Ecommerce Store for Audio Devices"
              description="Built with React, tailwind-css for styling and Stripe for payment gateway support."
              ghLink="https://github.com/santiagorao12/ecommerce/tree/master"
              demoLink="https://ecommerce-beige-two.vercel.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
