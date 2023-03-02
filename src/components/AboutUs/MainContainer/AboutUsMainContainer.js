import "./AboutUsMainContainer.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import React from "react";

function AboutUsMainContainer() {
  return (
    <Container
      fluid
      style={{
        display: "flex",
        borderRadius: 10,
        paddingTop: 100,
        paddingBottom: 100,
      }}
    >
      <Container>
        <Row
          fluid
          sm={2}
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Col
            // xs
            sm={7}
            md={5}
            lg={5}
            xl={20}
            style={
              {
                // display: "flex",
                // justifyContent: "center",
                // alignContent: "center",
              }
            }
          >
            <Image
              fluid
              style={{
                borderRadius: 30,
              }}
              src={require("../../../assets/images/banner_mock_1.png")}
            />
          </Col>
          <Col
            sm={11}
            md={20}
            lg={7}
            xl={20}
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: 50,
              maxWidth: 600,
            }}
          >
            {/*<Container>*/}
            <h6
              style={{
                fontWeight: "bold",
                textAlign: "start",
              }}
            >
              It Support For Business
            </h6>
            <br />

            <h4
              style={{
                fontWeight: "bold",
                textAlign: "start",
              }}
            >
              Preparing for your success trusted source in IT Services
            </h4>
            <br />

            <p style={{ textAlign: "start" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim
              <br />
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            {/*</Container>*/}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default AboutUsMainContainer;
