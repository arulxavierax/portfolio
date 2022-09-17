import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import CrabManager from "./Resources/CrabmanagerClone.png";
import Netmeds from "./Resources/NetmedsClone.png";
import Yoox from "./Resources/YooxClone.png";
import js from "./Resources/js.png";
import html from "./Resources/htmlTech.png";
import css from "./Resources/cssTech.png";
import chakraui from "./Resources/chakraui.png";
import react from "./Resources/reactTech.png";

function Projects() {
  return (
    <Container
      class=" text-center"
      fluid={true}
      // #3c4758
      style={{
        marginTop: "100px",
        background: "#5f5e5c",
        paddingTop: "30px",
        paddingBottom: "50px",
      }}
    >
      <Row>
        <Col>
          <h1 style={{ color: "white" }} class=" text-center fw-bold">
            Projects
          </h1>
        </Col>
      </Row>
      <Row sm={1} md={2} lg={4} style={{ marginTop: "50px" }}>
        <div class="col-sm-7 mx-auto" style={{ margin: "10px" }}>
          <Card>
            <Card.Img variant="top" class="mw-50" src={CrabManager} />
            <Card.Body>
              <Card.Title>
                {" "}
                <h4>CRAB MANAGER (Clone)</h4>{" "}
              </Card.Title>
              <Card.Text>
                Crab Manager is a website that helping you to: Lose weight
                quickly , Reduce inflammation , etc
              </Card.Text>
              <div style={{ display: "flex", margin: "10px" }}>
                <div>
                  <Image src={react} />
                </div>
                <div>
                  <Image src={chakraui} />
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div style={{ margin: "10px" }}>
                  <a
                    href="https://sweet-wind-8288.vercel.app/"
                    role="button"
                    class="btn btn-primary"
                  >
                    Go Live
                  </a>
                </div>
                <div style={{ margin: "10px" }}>
                  <a
                    href="https://github.com/arulxavierax/sweet-wind-8288"
                    role="button"
                    class="btn btn-outline-dark"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div class="col-sm-5 mx-auto" style={{ margin: "10px" }}>
          <Card style={{ padding: "10px" }}>
            <Card.Img variant="top" src={Netmeds} />
            <Card.Body>
              <Card.Title>
                <h4>NETMEDS (Clone)</h4>
              </Card.Title>
              <Card.Text>
                Netmeds is a online pharmacy where you can buy medicines.
                <br /> A Collaborative project completed in five day along with
                four Web Developers.
              </Card.Text>
              <div style={{ display: "flex", margin: "10px" }}>
                <div>
                  <Image src={html} />
                </div>
                <div>
                  <Image src={js} />
                </div>
                <div>
                  <Image src={css} />
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div style={{ margin: "10px" }}>
                  <a
                    href="https://inspiring-blini-089dcd.netlify.app/"
                    role="button"
                    class="btn btn-primary"
                  >
                    Go Live
                  </a>
                </div>
                <div style={{ margin: "10px" }}>
                  <a
                    href="https://github.com/arulxavierax/Netmeds-Clone"
                    role="button"
                    class="btn btn-outline-dark"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div class="col-sm-5 mx-auto" style={{ margin: "10px" }}>
          <Card style={{ padding: "10px" }}>
            <Card.Img variant="top" src={Yoox} />
            <Card.Body>
              <Card.Title>
                <h4>YOOX (Clone)</h4>
              </Card.Title>
              <Card.Text>
                Yoox is the world's leading online store for fashion, design and
                art that lasts a lifetime and beyond. Established in 2000, for
                Men, Women and Kids.
                <br /> A Collaborative project completed in five day along with
                five Web Developers
              </Card.Text>
              <div style={{ display: "flex", margin: "10px" }}>
                <div>
                  <Image src={html} />
                </div>
                <div>
                  <Image src={js} />
                </div>
                <div>
                  <Image src={css} />
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div style={{ margin: "10px" }}>
                  <a
                    href=" https://candid-starship-25c3ab.netlify.app/"
                    role="button"
                    class="btn btn-primary"
                  >
                    Go Live
                  </a>
                </div>
                <div style={{ margin: "10px" }}>
                  <a
                    href="https://github.com/arulxavierax/Project-U2-YOOX"
                    role="button"
                    class="btn btn-outline-dark"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Row>
    </Container>
  );
}

export default Projects;
