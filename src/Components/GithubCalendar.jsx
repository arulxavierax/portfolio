import React from "react";
import { useEffect } from "react";
import GitHubCalendar from "github-calendar";
import { Col, Container, Image, Row } from "react-bootstrap";

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

      <Row style={{ marginTop: "50px" }}>
        <Col>
          <a href="https://github.com/arulxavierax">
            <Image
              width={"100%"}
              src="https://github-readme-stats.vercel.app/api?username=arulxavierax&show_icons=true&theme=midnight-purple"
            />
          </a>
        </Col>
        <Col>
          <a href="https://github.com/arulxavierax">
            <Image
              width={"100%"}
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=arulxavierax&layout=compact"
            />
          </a>
        </Col>
        <a href="https://github.com/arulxavierax">
          <Image
            width={"50%"}
            style={{ display: "block", margin: "auto" }}
            src="https://github-readme-streak-stats.herokuapp.com/?user=arulxavierax"
          />
        </a>
      </Row>
    </Container>
  );
}

export default GithubCalendar;
