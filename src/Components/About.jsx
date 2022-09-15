import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <Container
      style={{ marginTop: "100px"}}
    >
      <Row>
        <Col>
          <h1 class=" text-center fw-bold">About</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p class="fs-2 text-center fw-light fst-italic">
            A Full Stack Web Developer who can write code using React, Redux and
            CSS on frontend, Nodejs , MongoDB and express on backend to build applications.
            Likes to solve Data Structure and Algorithm problems.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
