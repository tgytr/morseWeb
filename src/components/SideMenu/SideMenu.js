import './SideMenu.css';
import { Accordion, Container, Nav, Card, Button} from 'react-bootstrap';
import React, { Component } from 'react';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';


function SideMenu() {
  const decoratedOnClick = useAccordionButton(0);

  return (
      <Accordion>
        <Card>
            <Accordion.Button onClick={decoratedOnClick}>
              <div className="d-flex justify-content-between">
                <span>Ver horarios de apertura</span>
                {/*<span>{this.props.isOpen}</span>*/}
              </div>
            </Accordion.Button>
          <Accordion.Collapse eventKey="0">
            <div>
              Ver horarios de apertura
            </div>
          </Accordion.Collapse>
        </Card>
      </Accordion>
  );
  // return (
  //   <Accordion defaultActiveKey="0" flush>
  //     <Accordion.Item eventKey="0">
  //       <Accordion.Header>Soccer</Accordion.Header>
  //       <Accordion.Body>
  //         Today
  //       </Accordion.Body>
  //       <Accordion.Body>
  //         UK
  //       </Accordion.Body>
  //       <Accordion.Body>
  //         Europe
  //       </Accordion.Body>
  //       <Accordion.Body>
  //         South America
  //       </Accordion.Body>
  //     </Accordion.Item>
  //
  //     <Accordion.Item eventKey="1">
  //       <Accordion.Header>Horse Riding</Accordion.Header>
  //       <Accordion.Body>
  //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  //       </Accordion.Body>
  //     </Accordion.Item>
  //
  //     <Accordion.Item eventKey="2">
  //       <Accordion.Header>Olympics</Accordion.Header>
  //       <Accordion.Body>
  //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  //       </Accordion.Body>
  //     </Accordion.Item>
  //
  //     <Accordion.Item eventKey="3">
  //       <Accordion.Header><div className={'Side-header'}/>News and Polytics</Accordion.Header>
  //       <Accordion.Body>
  //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  //       </Accordion.Body>
  //     </Accordion.Item>
  //
  //     <Accordion.Item eventKey="4">
  //       <Accordion.Header>Tennis</Accordion.Header>
  //       <Accordion.Body>
  //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  //       </Accordion.Body>
  //     </Accordion.Item>
  //   </Accordion>
  // );
}

export default SideMenu;
