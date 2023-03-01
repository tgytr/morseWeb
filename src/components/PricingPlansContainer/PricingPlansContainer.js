import "./PricingPlansContainer.css";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import React from "react";

const priceList = [
  {
    packageName: "STANDARD",
    price: 30,
    currency: "dollar",
    content: [
      "Limited installs",
      "Unlimited downloads",
      "Free one year support",
    ],
  },
  {
    packageName: "BUSINESS",
    price: 50,
    currency: "dollar",
    content: [
      "Limited installs",
      "Unlimited downloads",
      "Free one year support",
    ],
  },
  {
    packageName: "PREMIUM",
    price: 60,
    currency: "dollar",
    content: [
      "Limited installs",
      "Unlimited downloads",
      "Free one year support",
    ],
  },
];

function PricingPlansContainer() {
  return (
    <Container style={{ paddingTop: 50, paddingBottom: 50 }}>
      <h7 style={{ color: "#0f4cba", fontWeight: "bold" }}>Pricing Packages</h7>
      <h2 style={{ fontWeight: "bold", paddingTop: 30, paddingBottom: 50 }}>
        Choose Your Best Plan
      </h2>
      <Row fluid md={3} className="justify-content-md-center">
        {priceList.map((item, index) => {
          console.log(item, "item");
          console.log(index, "index");
          return (
            <Col
              lg="3"
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                  borderColor: "#e7edf8",
                  height: 550,
                  // width: 300,
                  padding: 20,
                  justifyContent: "space-around",
                }}
              >
                <Container
                  fluid
                  style={{
                    borderRadius: 10,
                    backgroundColor: "#E5EEF6",
                    paddingTop: 30,
                    paddingBottom: 30,

                    // justifyContent: "space-around",
                  }}
                >
                  <h6 style={{ fontWeight: "bold" }}>{item.packageName}</h6>
                  <h3 style={{ color: "#0f4cba", fontWeight: "bold" }}>
                    $ {item.price}
                  </h3>
                  <h6 style={{ color: "#6d727e", fontWeight: "bold" }}>
                    per month
                  </h6>
                </Container>

                <Card.Title>Product Service</Card.Title>
                <Card.Text>
                  Sales budget Plan. Some quick example text to build on the
                  card{" "}
                </Card.Text>
                <div>
                  <Button variant="primary">Go somewhere</Button>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default PricingPlansContainer;
