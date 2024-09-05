import React, { useContext } from 'react';
import { Container, Row, Col, Button, Card as BootstrapCard } from 'react-bootstrap';
import { HouseContext } from './Housecontext';
import { INSURES } from '../data/assete/INSURE';
import './page.css';
import { Link, useLocation } from 'react-router-dom';
import { faCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Cartpage = () => {
  const { insuranceItems, removeFromCart } = useContext(HouseContext);


  const selectedInsurances = (insuranceItems || []).map((item) => {
    const insurance = INSURES.find((ins) => ins.id === item.id);
    return { ...insurance, count: item.count, meterValue: item.meterValue };
  });

 const totalItems = selectedInsurances.length;
  const orderTotal = selectedInsurances.reduce((total, insurance) => total + (insurance.price * insurance.meterValue), 0);

  return (
    <section className="vh-100" style={{ backgroundColor: '#f8f9fa' }}>
      <Container className="h-100">
        <Row className="d-flex justify-content-center align-items-center h-100">
          {totalItems === 0 ? (
            <>
              <p className="h2">You have not selected an insurance policy yet.</p>
              <Button className="go-to-cart-button" as={Link} to="/insurance">
                Go to Insurance
              </Button>
            </>
          ) : (
            <>
              <p>
                <span className="h2">Shopping Cart </span>
                <span className="h4">({totalItems} item{totalItems !== 1 && 's'} in your cart)</span>
              </p>

              {selectedInsurances.map((insurance, index) => (
                <BootstrapCard key={index} className="mb-4">
                  <BootstrapCard.Body className="p-4">
                    <Row className="align-items-center">
                      <Col>
                        <img className="img-fluid" alt={insurance.name} src={insurance.image} />
                      </Col>
                      <Col md={2} className="d-flex justify-content-center">
                        <div>
                          <p className="small text-muted mb-0 pb-0">Insurance</p>
                          <p className="lead fw-normal mb-0">{insurance.name}</p>
                        </div>
                      </Col>
                      <Col md={2} className="d-flex justify-content-center">
                        <div>
                          <p className="small text-muted mb-1 pb-0">Meter</p>
                          <p className="lead fw-normal mb-0">{insurance.meterValue}</p> 
                        </div>
                      </Col>
                      <Col md={2} className="d-flex justify-content-center">
                        <div>
                          <p className="small text-muted mb-1 pb-0">Quantity</p>
                          <p className="lead fw-normal mb-0">{insurance.count}</p>
                        </div>
                      </Col>
                      <Col md={2} className="d-flex justify-content-center">
                        <div>
                          <p className="small text-muted mb-1 pb-1">Price</p>
                          <p className="lead fw-normal mb-0">${insurance.price.toFixed(2) } *  M²</p>
                        </div>
                      </Col>
                      <Col md={2} className="d-flex justify-content-center">
                        <div>
                          <p className="small text-muted mb-1 pb-0">Total</p>
                          <p className="lead fw-normal pb-1 mb-3">${(insurance.price * insurance.meterValue).toFixed(2)}</p>
                          <Button variant="danger" onClick={() => removeFromCart(insurance.id)}>Remove from Cart</Button>
                        </div>
                      </Col>
                    </Row>
                  </BootstrapCard.Body>
                </BootstrapCard>
              ))}

              <BootstrapCard className="mb-5">
                <BootstrapCard.Body className="p-4">
                  <div className="float-end">
                    <p className="mb-0 me-5 d-flex align-items-center">
                      <span className="small text-muted me-2">Order total:</span>
                      <span className="lead fw-normal">${orderTotal.toFixed(2)}</span>
                    </p>
                  </div>
                </BootstrapCard.Body>
              </BootstrapCard>

              <div className="d-flex justify-content-end">
                <Button as={Link} to="/insurance" variant="light" size="lg" className="me-2 isn-btn">
                  <FontAwesomeIcon className='icon-isn-btn' icon={faCircleLeft} />
                  back to insurance
                </Button>
                <Button variant="primary" size="lg">Checkout</Button>
              </div>
            </>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Cartpage;
