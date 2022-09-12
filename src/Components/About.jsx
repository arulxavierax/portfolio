import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <Container
      fluid
      style={{ marginTop: "100px", border: "1px solid", height: "auto" }}
    >
      <Row style={{ border: "1px solid" }}>
        <Col>
          <h1>About</h1>
        </Col>
      </Row>
      <Row style={{ border: "1px solid" }}>
        <Col>
          <h1>content</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
