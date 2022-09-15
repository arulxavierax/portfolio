import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import CrabManager from "./Resources/CrabmanagerClone.png";
import Netmeds from "./Resources/NetmedsClone.png";
import Yoox from "./Resources/YooxClone.png";

function Projects() {
  return (
    <Container style={{ marginTop: "100px" }}>
      <Row>
        <Col>
          <h1 class=" text-center fw-bold">Projects</h1>
        </Col>
      </Row>
      <Row style={{ marginTop: "50px" }}>
        <Col>
          <Card>
            <Card.Img variant="top"  src={CrabManager} />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop: "50px" }}>
        <Col>
          <Card>
            <Card.Img variant="top" src={Netmeds} />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop: "50px" }}>
        <Col>
          <Card>
            <Card.Img variant="top" src={Yoox} />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
