import React, { useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

const Header = ({ onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col>
            <h4>Countries</h4>
          </Col>
          <Col className="text-end">
            <Nav className="justify-content-end">
              <Nav.Item>
                <Nav.Link
                  onClick={() => handleFilterChange('All')}
                  style={{ color: 'black', textDecoration: activeFilter === 'All' ? 'underline' : 'none' }}
                >
                  All
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  onClick={() => handleFilterChange('Asia')}
                  style={{ color: 'black', textDecoration: activeFilter === 'Asia' ? 'underline' : 'none' }}
                >
                  Asia
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  onClick={() => handleFilterChange('Europe')}
                  style={{ color: 'black', textDecoration: activeFilter === 'Europe' ? 'underline' : 'none' }}
                >
                  Europe
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
