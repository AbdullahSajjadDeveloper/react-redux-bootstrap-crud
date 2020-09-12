import React, { Fragment } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import AbdullahSajjadAvatar from "../Images/abdullah-sajjad.jpg";

const About = () => {
  return (
    <Fragment>
      <div className="container about-sec">
        <Container>
          <Row>
            <Col md={2}>
              <Image
                src={AbdullahSajjadAvatar}
                className="as-img"
                rounded
              />
            </Col>
            <Col md={7}>
              <h1>About Abdullah Sajjad</h1>
              <p>
                My name is Abdullah Sajjad. I am 13 Years Old. I live in
                Pakistan. I read in class 8th. I started to learn Computer
                Programming when I was 10 Years Old. My first Programming
                Language Was Java. From past one Year, I am learing Front-End
                and Back-End Web Development using JavaScript, React.JS, Redux,
                Bootstrap, PHP and MySql.
              </p>
              <Button
                variant="danger"
                className="mr-3"
                onClick={() => {
                  window.location.replace(
                    "https://www.github.com/abdullahsajjaddeveloper"
                  );
                }}
              >
                Github
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  window.location.replace("https://www.twitter.com/Abdulla13978570");
                }}
              >
                Twitter
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default About;
