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
        <Col className="skill" sm={1} md={4} lg={3}>
          <Image style={{margin:"auto" , display:"block"}} src={HTML} alt="HTM" />
          <h4 style={{textAlign:"center"}} >HTML</h4>
        </Col>
        <Col className="skill" sm={1} md={4} lg={3}>
          <Image style={{margin:"auto" , display:"block"}} class="mx-auto d-block" src={CSS} alt="CSS" />
          <h4 style={{textAlign:"center"}}>CSS</h4>
        </Col>
        <Col className="skill" sm={1} md={4} lg={3}>
          <Image style={{margin:"auto" , display:"block"}} class="mx-auto d-block" src={JavaScript} alt="Javascript" />
          <h4 style={{textAlign:"center"}}>JavaScript</h4>
        </Col>
        <Col className="skill" sm={1} md={4} lg={3}>
          <Image style={{margin:"auto" , display:"block"}} class="mx-auto d-block" src={ReactLogo} alt="React" />
          <h4 style={{textAlign:"center"}}>React</h4>
        </Col>
        <Col className="skill" sm={1} md={4} lg={3}>
          <Image style={{margin:"auto" , display:"block"}} class="mx-auto d-block" src={MongoDB} alt="MongoDB" />
          <h4 style={{textAlign:"center"}}>MongoDB</h4>
        </Col>
        <Col className="skill" sm={1} md={4} lg={3}>
          <Image style={{margin:"auto" , display:"block"}} class="mx-auto d-block" src={Express} alt="Express" />
          <h4 style={{textAlign:"center"}}>Express</h4>
        </Col>
        <Col className="skill" sm={1} md={4} lg={3}>
          <Image style={{margin:"auto" , display:"block"}} class="mx-auto d-block" src={NodeJS} alt="NodeJS" />
          <h4 style={{textAlign:"center"}}>Node JS</h4>
        </Col>
        <Col className="skill" sm={1} md={4} lg={3}>
          <Image style={{margin:"auto" , display:"block"}} class="mx-auto d-block" src={Git} alt="Github" />
          <h4 style={{textAlign:"center"}}>Github</h4>
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
