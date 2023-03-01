import "./MainBody.css";
import {
  Navbar,
  Container,
  NavDropdown,
  Offcanvas,
  Nav,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import React, { Component } from "react";
import logo from "../../logo.svg";

function MainBody() {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/SideMenu.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default MainBody;
