import React from "react";
import { Container, Row, Col , Image } from "react-bootstrap";
import Photo from "./Resources/Arul.png";

function About() {
  return (
    <Container
      style={{ marginTop: "120px"}}
    >
      <Row>
        <Col>
          <h1 class=" text-center fw-bold">About</h1>
        </Col>
      </Row>
      <div class="row align-items-center">
      <Col sm={1} md={4}>
              <Image
                rounded={true}
                class="mx-auto d-block"
                fluid={true}
                src={Photo}
              />
            </Col>
        <div class="col">
          <span class="fs-2 text-center fw-light fst-italic">
            A Full Stack Web Developer with good communication skills and learning abilities, who can write code using React, Redux and
            CSS on frontend, Nodejs , MongoDB and Express on backend to build applications.
            Likes to solve Data Structure and Algorithm problems.Looking forwards to work in a product based company to enhance the experince and skills.
          </span>
        </div>
      </div>
    </Container>
  );
}

export default About;
