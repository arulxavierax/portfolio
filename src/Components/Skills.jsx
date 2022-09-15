import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import NodeJS from "./Resources/NodeJS.png";
import MongoDB from "./Resources/MongoDB.png";
import CSS from "./Resources/CSS.png";
import Express from "./Resources/Express.png";
import Git from "./Resources/Git.png";
import HTML from "./Resources/HTML.png";
import JavaScript from "./Resources/JavaScript.png";
import ReactLogo from "./Resources/React.png";

function Skills() {
  return (
    <Container class="text-center" style={{ marginTop: "100px" }}>
      <Row>
        <Col style={{ marginBottom: "50px" }}>
          <h1 class=" text-center fw-bold">Skills</h1>
        </Col>
      </Row>
      <Row>
        <Col sm={1} md={4} lg={3}>
            <Image class="mx-auto d-block" src={HTML} alt="HTM" L />
            <h4 style={{ marginLeft: "40px" }}>HTML</h4>
        </Col>
        <Col sm={1} md={4} lg={3}>
          <Image class="mx-auto d-block" src={CSS} alt="CSS" />
          <h4 style={{ marginLeft: "40px" }}>CSS</h4>
        </Col>
        <Col sm={1} md={4} lg={3}>
          <Image class="mx-auto d-block" src={JavaScript} alt="Javascript" />
          <h4 style={{ marginLeft: "40px" }}>JavaScript</h4>
        </Col>
        <Col sm={1} md={4} lg={3}>
          <Image class="mx-auto d-block" src={ReactLogo} alt="React" />
          <h4 style={{ marginLeft: "40px" }}>React</h4>
        </Col>
        <Col sm={1} md={4} lg={3}>
          <Image class="mx-auto d-block" src={MongoDB} alt="MongoDB" />
          <h4 style={{ marginLeft: "40px" }}>MongoDB</h4>
        </Col>
        <Col sm={1} md={4} lg={3}>
          <Image class="mx-auto d-block" src={Express} alt="Express" />
          <h4 style={{ marginLeft: "40px" }}>Express</h4>
        </Col>
        <Col sm={1} md={4} lg={3}>
          <Image class="mx-auto d-block" src={NodeJS} alt="NodeJS" />
          <h4 style={{ marginLeft: "40px" }}>Node JS</h4>
        </Col>
        <Col sm={1} md={4} lg={3}>
          <Image class="mx-auto d-block" src={Git} alt="Github" />
          <h4 style={{ marginLeft: "40px" }}>Github</h4>
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
