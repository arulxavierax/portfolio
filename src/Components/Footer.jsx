import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Container
    class=" text-center"
      fluid={true}
      style={{
        backgroundColor:"#4070F4",
        marginTop: "100px",
        height: "auto",
        color:"white"
      }}
    >
      <Row>
        <Col>
          <h1 class="fw-bold">GET IN TOUCH</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5>Arul Xavier</h5>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
