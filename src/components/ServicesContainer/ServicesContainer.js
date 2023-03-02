import "./ServicesContainer.css";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import React from "react";

const serviceList = [
  {
    name: "Product Service",
    description:
      "Sales budget Plan. Some quick example text to build on the card",
    image: "",
    btnAction: () => {},
  },
  {
    name: "Merchandising",
    description:
      "Sales budget Plan. Some quick example text to build on the card",
    btnAction: () => {},
  },
  {
    name: "Cloud Service",
    description:
      "Sales budget Plan. Some quick example text to build on the card",
    btnAction: () => {},
  },
  {
    name: "Machine Learning",
    description:
      "Sales budget Plan. Some quick example text to build on the card",
    btnAction: () => {},
  },
];

function ServicesContainer() {
  return (
    <Container style={{ paddingTop: 100, paddingBottom: 100 }}>
      <Row xs={1} md={3} sm={2} lg={4} className="g-4">
        {serviceList.map((item, index) => {
          console.log(item, "item");
          console.log(index, "index");
          return (
            <Col
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card
                style={{
                  height: 350,
                  width: 300,
                  borderColor: "#e7edf8",
                  justifyContent: "space-around",
                  alignItems: "center",
                  padding: 20,
                }}
              >
                <div>
                  <Image
                    style={{
                      height: 100,
                      width: 100,
                      alignItems: "center",
                    }}
                    src={require("../../assets/images/settings.png")}
                  />
                </div>

                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
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

export default ServicesContainer;
