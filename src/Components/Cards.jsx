import React from "react";
import { Card, Image } from "react-bootstrap";

function Cards({
  titleSrc,
  src1,
  src2,
  src3,
  src4,
  src5,
  content,
  heading,
  liveLink,
  githubLink,
}) {
  return (
    <Card>
      <Card.Img variant="top" class="mw-50" src={titleSrc} />
      <Card.Body>
        <Card.Title>
          {" "}
          <h4>{heading}</h4>{" "}
        </Card.Title>
        <Card.Text>{content}</Card.Text>
        <div style={{ display: "flex", margin: "10px" }}>
          <div>
            <Image src={src1} />
          </div>
          <div>
            <Image src={src2} />
          </div>
          <div>
            <Image src={src3} />
          </div>
          <div>
            <Image src={src4} />
          </div>
          <div>
            <Image src={src5} />
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ margin: "10px" }}>
            <a
              target="_blank"
              href={liveLink}
              role="button"
              class="btn btn-primary"
            >
              Go Live
            </a>
          </div>
          <div style={{ margin: "10px" }}>
            <a
              href={githubLink}
              target="_blank"
              role="button"
              class="btn btn-outline-info"
            >
              View Code
            </a>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Cards;
