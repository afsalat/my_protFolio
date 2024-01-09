import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



export default function HeroSection() {
  return (
    <div id="heroSection" className="hero-section">
      <Container>
        <Row>
          <Col md={4} sm={12}>
            <div
              id="hero-section-content-box"
              className="hero-section-content-box"
            >
              <div className="hero-section-content">
                <p className="section-title">Hey, I'm Afsal</p>
                <h1>
                  <span className="hero-section-title-color">
                    Full Stack Developer
                  </span>
                </h1>
                <p className="hero-section-description">
                  Hello, I'm Afsal, a versatile full stack developer
                  specializing in Django and ASP.net. With a solid background in
                  web development, I have a keen interest in creating web..{" "}
                  <br />
                  uam dit eligendi enim perspiciatis!
                </p>
              </div>
              <button className="btn btn-primary">Get In Touch</button>
            </div>
          </Col>

          <Col md={8} sm={12}>
            <div id="hero-section-img" className="hero-section-img">
              <img
                className="pro_image"
                src={require("./img/picofme.png")}
                alt="lll"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
