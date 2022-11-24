import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import CrabManager from "./Resources/CrabmanagerClone.png";
import Netmeds from "./Resources/NetmedsClone.png";
import Yoox from "./Resources/YooxClone.png";
import Clocify from "./Resources/Clocify.png";
import Sephora from "./Resources/Sephora.png";
import js from "./Resources/js.png";
import html from "./Resources/htmlTech.png";
import css from "./Resources/cssTech.png";
import chakraui from "./Resources/chakraui.png";
import react from "./Resources/reactTech.png";
import MongoDB from "./Resources/mongodbTech.png";
import Node from "./Resources/nodejsTech.png";
import Express from "./Resources/expressTech.png";
import Cards from "./Cards";

function Projects() {
  return (
    <Container
      id="projects"
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
      <Row md={2} lg={3} style={{ marginTop: "50px" }}>
        <div class="col-sm-5 mx-auto" style={{ margin: "10px" }}>
          <Cards
            titleSrc={Sephora}
            src1={react}
            src2={MongoDB}
            src3={Node}
            src4={Express}
            src5={chakraui}
            heading="SEPHORA (Clone)"
            content="Sephora is a French multinational retailer of personal care and beauty products.Sephora offers beauty products including cosmetics, skincare, body,etc.Collaborative project completed in five days along with four members."
            githubLink="https://github.com/Ankur982/dull-letter-5131"
            liveLink="https://sephora-pink.vercel.app/"
          />
        </div>
        <div class="col-sm-5 mx-auto" style={{ margin: "10px" }}>
          <Cards
            titleSrc={Clocify}
            src1={react}
            src2={MongoDB}
            src3={Node}
            src4={Express}
            src5={chakraui}
            heading="CLOCKIFY (Clone)"
            content="Time tracking software used by millions. Clockify is a time tracker
            and timesheet app that lets you track work hours across projects.
            Unlimited users, free forever.Collaborative project completed in five days along with four
            members."
            githubLink="https://github.com/saurabhsolanki/unused-library-4088"
            liveLink="https://clockyf.netlify.app/"
          />
        </div>
        <div class="col-sm-5 mx-auto" style={{ margin: "10px" }}>
          <Cards
            titleSrc={Netmeds}
            src1={html}
            src2={js}
            src3={css}
            heading="NETMEDS (Clone)"
            content="Netmeds is a online pharmacy where you can buy medicines.
             A Collaborative project completed in five day along with
             four Web Developers."
            liveLink="https://inspiring-blini-089dcd.netlify.app/"
            githubLink="https://github.com/arulxavierax/Netmeds-Clone"
          />
        </div>
        <div class="col-sm-5 mx-auto" style={{ margin: "10px" }}>
          <Cards
            titleSrc={Yoox}
            src1={html}
            src2={js}
            src3={css}
            heading="YOOX (Clone)"
            content="Yoox is the world's leading online store for fashion, design and
            art that lasts a lifetime and beyond. Established in 2000.
           A Collaborative project completed in five day along with
            five Web Developers"
            liveLink="https://candid-starship-25c3ab.netlify.app/"
            githubLink="https://github.com/arulxavierax/Project-U2-YOOX"
          />
        </div>
      </Row>
    </Container>
  );
}

export default Projects;
