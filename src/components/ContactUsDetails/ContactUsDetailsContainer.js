import "./ContactUsDetailsContainer.css";
import { Container } from "react-bootstrap";
import React from "react";
import {
  faLocation,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactUsDetailsContainer() {
  return (
    <Container style={{ paddingTop: 100, paddingBottom: 100 }}>
      <div className="rn-contact-top-area ptb--120 bg_color--5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="rn-address">
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ marginBottom: 20 }}
                  size={"lg"}
                />
                <div className="inner">
                  <h4 className="title">Contact With Phone Number</h4>
                  <p>
                    <a href="tel:+057 254 365 456">+057 254 365 456</a>
                  </p>
                  <p>
                    <a href="tel:+856 325 652 984">+856 325 652 984</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_mobile--50">
              <div className="rn-address">
                <FontAwesomeIcon
                  icon={faMailBulk}
                  size={"lg"}
                  style={{ marginBottom: 20 }}
                />
                <div className="inner">
                  <h4 className="title">Email Address</h4>
                  <p>
                    <a href="mailto:admin@gmail.com">admin@gmail.com</a>
                  </p>
                  <p>
                    <a href="mailto:example@gmail.com">example@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--50">
              <div className="rn-address">
                <FontAwesomeIcon
                  icon={faLocation}
                  size={"lg"}
                  style={{ marginBottom: 20 }}
                />
                <div className="inner">
                  <h4 className="title">Location</h4>
                  <p>
                    27 Division St. New York, NY 100002 USA dkjdhiuqwdu
                    diuqwiuduiqw
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ContactUsDetailsContainer;
