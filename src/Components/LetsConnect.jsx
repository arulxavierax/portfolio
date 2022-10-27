import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Linkedin from "./Resources/ConnectLinkedin.png";
import Github from "./Resources/ConnectGithub.png";
import Phone from "./Resources/ConnectPhone.png";
import Email from "./Resources/ConnectEmail.png";

function LetsConnect() {
  return (
    <Container id="contact" style={{ marginTop: "150px" }}>
      <Row>
        <Col style={{ marginBottom: "10px" }}>
          <h1 class="text-start fw-bold">Let's Connect</h1>
        </Col>
      </Row>
      <div style={{ display: "flex", margin: "10px" }}>
        <div>
          <Image width={30} src={Email} />
        </div>
        <div>
          <h6 style={{ marginLeft: "10px" }} class="text-start">
            arulxavier2121@gmail.com
          </h6>
        </div>
      </div>
      <div style={{ display: "flex", margin: "10px" }}>
        <div>
          <Image width={30} src={Phone} />
        </div>
        <div>
          <h6 style={{ marginLeft: "10px" }} class="text-start">
            {" "}
            +91 9497302870
          </h6>
        </div>
      </div>
      <div style={{ display: "flex", margin: "10px" }}>
        <div>
          <Image width={30} src={Linkedin} />
        </div>
        <div>
          <h6 style={{ marginLeft: "10px" }} class="text-start">
            {" "}
            <a
              href="https://www.linkedin.com/in/arul-xavier/"
              class="link-dark"
            >
              Arul Xavier
            </a>
          </h6>
        </div>
      </div>
      <div style={{ display: "flex", margin: "10px" }}>
        <div>
          <Image width={30} src={Github} />
        </div>
        <div>
          <h6 style={{ marginLeft: "10px" }} class="text-start">
            <a href="https://github.com/arulxavierax" class="link-dark">
              arulxavierax
            </a>
          </h6>
        </div>
      </div>
    </Container>
  );
}

export default LetsConnect;
