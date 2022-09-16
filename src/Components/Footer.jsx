import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import email from "./Resources/emailFooter.png";
import phone from "./Resources/phoneFooter.png";
import github from "./Resources/githubFooter.png";
import linkedin from "./Resources/linkedinFooter.png";

function Footer() {
  return (
    <Container
      class=" text-center"
      fluid={true}
      style={{
        backgroundColor: "rgb(43 54 84)",
        color: "white",
        margin: "auto",
        marginTop: "150px",
        padding: "30px",
      }}
    >
      <Row style={{ margin: "10px" }}>
        <Col>
          <h1 class="fw-bold text-center">
            {" "}
            <u>GET IN TOUCH</u>
          </h1>
        </Col>
      </Row>
      <Row style={{ margin: "10px" }}>
        <Col>
          <h5 class="text-center">Arul Xavier</h5>
        </Col>
      </Row>
      <div
        class="text-center"
        style={{
          margin: "auto",
          marginTop:"20px",
          width: "40%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div>
          <Image class="mx-auto d-block" width={30} fluid={true} src={email} />
          <h6>
            <u>Email</u>
          </h6>
        </div>
        <div>
          <Image class="mx-auto d-block" width={30} fluid={true} src={phone} />
          <h6>
            <u>Pone</u>
          </h6>
        </div>
        <div>
          <Image
            class="mx-auto d-block"
            width={30}
            fluid={true}
            src={linkedin}
          />

          <h6>
            <a
              href="https://www.linkedin.com/in/arul-xavier/"
              class="link-light"
            >
              Linkedin
            </a>
          </h6>
        </div>
        <div>
          <Image class="mx-auto d-block" width={30} fluid={true} src={github} />
          <h6>
            <a href="https://github.com/arulxavierax" class="link-light">
              Github
            </a>
          </h6>
        </div>
      </div>
    </Container>
  );
}

export default Footer;
