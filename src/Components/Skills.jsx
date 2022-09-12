import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Skills() {
  return (
    <Container
      fluid
      style={{ marginTop: "100px", border: "1px solid", height: "200px" }}
    >
      <Row>
        <Col style={{ border: "1px solid" }}>
          <h1>Skills</h1>
        </Col>
      </Row>
      <Row>
        <Col style={{ border: "1px solid" }}>logo</Col>
        <Col style={{ border: "1px solid" }}>logo</Col>
        <Col style={{ border: "1px solid" }}>logo</Col>
        <Col style={{ border: "1px solid" }}>logo</Col>
      </Row>
      <Row>
        <Col style={{ border: "1px solid" }}>logo</Col>
        <Col style={{ border: "1px solid" }}>logo</Col>
        <Col style={{ border: "1px solid" }}>logo</Col>
        <Col style={{ border: "1px solid" }}>logo</Col>
      </Row>
    </Container>
  );
}

export default Skills;
