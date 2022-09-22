import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function SoftSkills() {
  return (
    <Container style={{marginTop:"100px"}} >
        <Row>
            <Col>
            <h1 class="text-start fw-bold">Soft Skills</h1>
            </Col>
        </Row>
        <Row>
            <Col>
            <h4 style={{ margin: "10px"}} className="sk" ><li>Communication</li></h4>
            <h4 style={{ margin: "10px"}} className="sk"><li>Team Work</li></h4>
            <h4 style={{ margin: "10px"}} className="sk"><li>Problem Solving</li></h4>
            <h4 style={{ margin: "10px"}} className="sk"><li>Learning Ability</li></h4>
            <h4 style={{ margin: "10px"}} className="sk"><li>Remote Work & Collabaration</li></h4>
            </Col>
        </Row>
    </Container>
  )
}

export default SoftSkills