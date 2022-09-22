import React from "react";
import { useEffect } from "react";
import GitHubCalendar from "github-calendar";
import { Col, Container, Row } from "react-bootstrap";

function GithubCalendar() {
  useEffect(() => {
    GitHubCalendar(".calendar", "arulxavierax", {
      proxy(arulxavierax) {
        return fetch(`https://your-proxy.com/github?user=${arulxavierax}`);
      },
    }).then((r) => r.text());
    GitHubCalendar(".calendar", "arulxavierax");
    GitHubCalendar(".calendar", "arulxavierax", { responsive: true });
  }, []);

  return (
    <Container style={{ marginTop: "150px" }}>
      <Row>
        <Col style={{ marginBottom: "10px" }}>
          <h1 class="text-center fw-bold">Github Calendar</h1>
        </Col>
      </Row>
      <Row>
        <Col className="gitCalendar">
          <div className="calendar"></div>
        </Col>
      </Row>
    </Container>
  );
}

export default GithubCalendar;
