import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function LetsConnect() {
  return (
    <Container
      fluid
      style={{ marginTop: "100px", border: "1px solid", height: "200px" }}
    >
      <Row>
        <Col style={{ border: "1px solid" }}>
          <h1>Lets's Connect</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default LetsConnect;
