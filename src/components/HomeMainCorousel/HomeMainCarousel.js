import "./HomeMainCarousel.css";
import { Button, Carousel, Image } from "react-bootstrap";
import React from "react";

function HomeMainCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          style={{
            display: "flex",
            width: "auto",
            height: 800,
            alignContent: "center",
          }}
          src={require("../../assets/images/slide_1.jpg")}
          alt="Second slide"
        />

        <Carousel.Caption
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 800,
            flexDirection: "column",
          }}
        >
          <h9>EMPOWER YOUR BUSINESS</h9>
          <h2 style={{ fontWeight: "bold", padding: 40 }}>
            Merchandising & Operations,
            <br /> Retail Services
          </h2>
          <Button
            style={{
              backgroundColor: "#0f4cba",
              borderColor: "#0f4cba",
              padding: 10,
              color: "white",
              display: "flex",
              justifyItems: "center",
            }}
            // variant="danger"
          >
            Meet With Us
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          style={{
            display: "flex",
            width: "auto",
            height: 800,
            alignContent: "center",
          }}
          src={require("../../assets/images/slide_2.jpg")}
          alt="Second slide"
        />

        <Carousel.Caption
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 800,
            flexDirection: "column",
          }}
        >
          <h9>EMPOWER YOUR BUSINESS</h9>
          <h2 style={{ fontWeight: "bold", padding: 40 }}>
            Merchandising & Operations,
            <br /> Retail Services
          </h2>
          <Button
            style={{
              backgroundColor: "#0f4cba",
              padding: 10,
              color: "white",
              display: "flex",
              justifyItems: "center",
            }}
            variant="primary"
          >
            Meet With Us
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      {/*<Carousel.Item>*/}
      {/*    <Image*/}
      {/*        src={require('../../assets/images/slide_3.jpg')}*/}
      {/*        alt="Third slide"*/}
      {/*    />*/}
      {/*    <Carousel.Caption>*/}
      {/*        <h3>Third slide label</h3>*/}
      {/*        <p>*/}
      {/*            Praesent commodo cursus magna, vel scelerisque nisl consectetur.*/}
      {/*        </p>*/}
      {/*    </Carousel.Caption>*/}
      {/*</Carousel.Item>*/}
    </Carousel>
  );
}

export default HomeMainCarousel;
