import React, { useRef } from "react";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import Linkedin from "./Resources/ConnectLinkedin.png";
import Github from "./Resources/ConnectGithub.png";
import Phone from "./Resources/ConnectPhone.png";
import Email from "./Resources/ConnectEmail.png";
import Alert from "react-bootstrap/Alert";

function LetsConnect() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q3lrdq6",
        "template_j1mpsfe",
        form.current,
        "W265rU6yopAB6ZseF"
      )
      .then(
        (result) => {
          console.log(result, "sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <Container
      id="contact"
      style={{ marginTop: "150px", marginBottom: "20px" }}
    >
      <Row>
        <Col style={{ marginBottom: "10px" }}>
          <h1 class="text-start fw-bold">Let's Connect</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <div
            style={{
              borderRadius: "10px",
              backgroundColor: "#322e2f",
              color: "#ffffff",
              padding: "20px",
            }}
          >
            <Form ref={form} onSubmit={sendEmail}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  placeholder="Enter your name"
                  type="text"
                  name="user_name"
                />
                <Form.Label>Email</Form.Label>
                <Form.Control
                  placeholder="Enter your email"
                  type="email"
                  name="user_email"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control
                  placeholder="Write it down"
                  as="textarea"
                  name="message"
                />
                <Button
                  style={{ marginTop: "10px" }}
                  size="large"
                  type="submit"
                >
                  Send
                </Button>
              </Form.Group>
            </Form>
          </div>
        </Col>
        <Col>
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
        </Col>
      </Row>
    </Container>
  );
}

export default LetsConnect;
