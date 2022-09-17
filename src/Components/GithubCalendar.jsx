import React from "react";
import GitHubCalendar from "github-calendar";
import { Col, Container, Row } from "react-bootstrap";

function GithubCalendar() {
  GitHubCalendar(".calendar", "arulxavierax",{responsive:true});
  return (
    <Container style={{ marginTop: "100px" }}>
      <Row>
        <Col style={{ marginBottom: "10px" }}>
          <h1 class="text-start fw-bold">Github Calendar</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <div class="calendar"></div>
        </Col>
      </Row>
    </Container>
  );
}

export default GithubCalendar;
