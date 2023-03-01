import "./ServicesContainerTwo.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import React from "react";

function ServicesContainerTwo() {
  return (
    <Container
      fluid
      style={{
        display: "flex",
        borderRadius: 10,
        backgroundColor: "#0F1E29",
        paddingTop: 100,
        paddingBottom: 100,
      }}
    >
      <Container>
        <Row className="justify-content-md-center">
          <Col
            // xs
            md={7}
            lg={4}
            xl={4}
            sm={20}
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Image
              fluid
              style={{
                borderRadius: 30,
              }}
              src={require("../../assets/images/banner_mock_1.png")}
            />
          </Col>
          <Col
            md={5}
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: 50,
              maxWidth: 500,
            }}
          >
            <Container>
              <h6
                style={{
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "start",
                }}
              >
                It Support For Business
              </h6>
              <br />

              <h4
                style={{
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "start",
                }}
              >
                Preparing for your success trusted source in IT Services
              </h4>
              <br />

              <p style={{ color: "white", textAlign: "start" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim
                <br />
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat.
              </p>
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ServicesContainerTwo;
