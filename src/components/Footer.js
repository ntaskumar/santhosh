import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import googleLogo from '../assets/google.png';
import facebookLogo from '../assets/facebook.png';
import indeedLogo from '../assets/indeed.png';
import twitterLogo from '../assets/twitter.png';

const Footer = () => {
  return (
    <footer>
      <Container fluid style={{ marginTop: '10px' }}>
        <Row className="justify-content-center">
          <Col className="col-auto">
            <a href="#!" className="p-2">
              <img src={googleLogo} alt="Google" width="30" height="30" />
            </a>
            <a href="#!" className="p-2">
              <img src={facebookLogo} alt="Facebook" width="30" height="30" />
            </a>
            <a href="#!" className="p-2">
              <img src={indeedLogo} alt="Indeed" width="30" height="30" />
            </a>
            <a href="#!" className="p-2">
              <img src={twitterLogo} alt="Twitter" width="30" height="30" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
