import React from "react";
import headshot from "../assets/images/headshot.jpg";
import { Row, Col } from "react-bootstrap";
import "./style.css";
import resume from "../assets/images/Resume.pdf";

export default function About() {
  return (
    <section id="content" className="clearfix">
      <Row>
        <Col>
          <h2>About Me</h2>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <img id="headshot" src={headshot} alt="Samuel Jackson" />
          <p id="bio">
            As a driven and tech-savvy Web Developer, I have always been pulled
            towards technology. I have received a Web Development Coding
            Certification from the George Washington University. I have
            experience in the foundations of web development including HTML,
            CSS, Bootstrap, Javascript, jQuery, Node.js, and React with
            experience working with a full MERN stack. Having an appetite for
            continuous learning, collaboration, and problem-solving, I plan to
            create and maintain websites, while also developing iOS & Android
            apps. Equally passionate about building applications that assist
            everyday people to make their lives easier. Looking to bring my
            attention to detail and technical skills to a company to grow and
            become a valuable asset.
          </p>
        </Col>
      </Row>
      <br />
      <strong>
        <a href={resume}>Resume</a>
      </strong>
      <br />
      <br />
      <strong>Email: </strong>
      <a href="mailto:samuelsjackson7@gmail.com">SamuelSJackson7@gmail.com</a>
      <br />
      <br />
      <strong>Phone Number: </strong> 703-861-6462
    </section>
  );
}
