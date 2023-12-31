import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import data from "../../data/index.json";

export default function AboutMe() {
  return (
    <div className="about--section">
      <Container>
        <Row>

          <Col md={6} sm={12} >
            <div className="about--section--img">
              <img className="about--section--img--sub" src={require('./img/profilepic.jpg')} alt="dfgfgfdgfdg" srcset="" />
            </div>
          </Col>

          <Col md={6} sm={12} >
            <div className="about--section--details">
              <div className="about--section--description">
                {data?.aboutme?.map((item) => (
                  <p>{item.about_description}</p>
                ))}
                <br />
              </div>
              <div class="button-wrapper" data-tippy-content="Click to copy button 85">
                <button class="about--section--button" >Discover More</button>
              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  );
}
