import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import CrabManager from "./Resources/CrabmanagerClone.png";
import Netmeds from "./Resources/NetmedsClone.png";
import Yoox from "./Resources/YooxClone.png";

function Projects() {
  return (
    <Container
      class="text-center"
      fluid={true}
      style={{ marginTop: "100px", background: "#0a0e18", padding: "50px" }}
    >
      <Row>
        <Col>
          <h1 style={{ color: "white" }} class=" text-center fw-bold">
            Projects
          </h1>
        </Col>
      </Row>
      <Row style={{ marginTop: "50px" }}>
        <div class="col-sm-6">
          <Card>
            <Card.Img variant="top" class="mw-50" src={CrabManager} />
            <Card.Body>
              <Card.Title>CRAB MANAGER (Clone)</Card.Title>
              <Card.Text>
                Crab Manager is a website that helping you to: Lose weight
                quickly , Reduce inflammation , etc
              </Card.Text>
            </Card.Body>
            <a
              href="https://sweet-wind-8288.vercel.app/"
              role="button"
              class="btn btn-outline-primary"
            >
              Go Live
            </a>
            <a
              href="https://github.com/arulxavierax/sweet-wind-8288"
              role="button"
              class="btn btn-outline-primary"
            >
              View Code
            </a>
          </Card>
        </div>
      </Row>
      <Row style={{ marginTop: "50px" }}>
        <div class="col-sm-6">
          <Card>
            <Card.Img variant="top" src={Netmeds} />
            <Card.Body>
              <Card.Title>NETMEDS (Clone)</Card.Title>
              <Card.Text>
                Netmeds is a online pharmacy where you can buy medicines. A
                Collaborative project completed in five day along with four Web
                Developers
              </Card.Text>
            </Card.Body>
            <a
              href="https://inspiring-blini-089dcd.netlify.app/"
              role="button"
              class="btn btn-outline-primary"
            >
              Go Live
            </a>
            <a
              href="https://github.com/arulxavierax/Netmeds-Clone"
              role="button"
              class="btn btn-outline-primary"
            >
              View Code
            </a>
          </Card>
        </div>
      </Row>
      <Row style={{ marginTop: "50px" }}>
        <div class="col-sm-6">
          <Card>
            <Card.Img variant="top" src={Yoox} />
            <Card.Body>
              <Card.Title>YOOX (Clone)</Card.Title>
              <Card.Text>
                Yoox is the world's leading online store for fashion, design and
                art that lasts a lifetime and beyond. Established in 2000, for
                Men, Women and Kids.
              </Card.Text>
            </Card.Body>
            <a
              href=" https://candid-starship-25c3ab.netlify.app/"
              role="button"
              class="btn btn-outline-primary"
            >
              Go Live
            </a>
            <a
              href="https://github.com/arulxavierax/Project-U2-YOOX"
              role="button"
              class="btn btn-outline-primary"
            >
              View Code
            </a>
          </Card>
        </div>
      </Row>
    </Container>
  );
}

export default Projects;
