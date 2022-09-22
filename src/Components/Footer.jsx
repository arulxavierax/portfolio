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
        paddingBottom: "10px",
      }}
    >
      <Row>
        <Col style={{paddingTop: "10px",}}>
          <h3 class="fw-bold text-center">
            {" "}
            <u>GET IN TOUCH</u>
          </h3>
        </Col>
      </Row>
      <Row>
        <Col style={{paddingBottom: "10px",}}>
          <h5 class="text-center">Arul Xavier</h5>
        </Col>
      </Row>
      <div
        class="text-center"
        style={{
          margin: "auto",
          width: "40%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div>
          <Image class="mx-auto d-block" width={30} fluid={true} src={email} />
          <h6>
            <u>E-mail</u>
          </h6>
        </div>
        <div>
          <Image class="mx-auto d-block" width={30} fluid={true} src={phone} />
          <h6>
            <u>Phone</u>
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
