import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { fetchCountries } from '../features/countrySlice'; // Adjust the path as per your directory structure
import Header from '../components/Header'; // Import Header component
import Footer from '../components/Footer'; // Import Footer component

const HomePage = () => {
  const dispatch = useDispatch();
  const { countries, status, error } = useSelector((state) => state.countries);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const handleFilterChange = (region) => {
    setFilter(region);
  };

  const filteredCountries = countries.filter(country => 
    filter === 'All' || country.region === filter
  );

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Header onFilterChange={handleFilterChange} />
      <Container className="mt-3">
        <div className="scrollable-container" style={{ maxHeight: '500px', overflowY: 'scroll' }}>
          {filteredCountries.length === 0 ? (
            <div>No data found</div>
          ) : (
            <Row xs={1} sm={2} md={2} className="g-4">  
              {filteredCountries.map((country, index) => (
                <Col key={index} xs={12} sm={6} className="d-flex">
                 <Card className="flex-fill h-100" style={{ border: "1px solid black" }}>


                    <Row className="g-0 align-items-center" style={{ paddingTop: '20px',paddingLeft:'20px',paddingBottom:'20px' }}>
                      <Col xs={3} className="d-flex justify-content-center align-items-center">
                        <Card.Img
                          variant="top"
                          src={country.flag}
                          style={{ width: '100%', height: 'auto', maxWidth: '100%', borderRadius: '5px' }}
                        />
                      </Col>
                      <Col xs={8}>
                        <Card.Body>
                          <Card.Title>{country.name}</Card.Title>
                          <Card.Text>{country.region}</Card.Text>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </div>
      </Container>
      <div style={{ marginTop: '80px' }} />  
      <div className="text-center mt-4">  
        copyright @ 2024 All rights reserved
      </div>
    
      <Footer />
    </>
  );
};

export default HomePage;
