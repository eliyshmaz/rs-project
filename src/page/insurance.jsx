import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { INSURES } from '../data/assete/INSURE';
import { Container, Row, Col } from 'react-bootstrap';
import { HouseContext } from './Housecontext';
import './page.css';

export const Insurance = () => {
  const navigate = useNavigate();
  const { addToCart, insuranceItems } = useContext(HouseContext);
  const [editingStates, setEditingStates] = useState({});
  const [inputValues, setInputValues] = useState({});
  const [errorMessages, setErrorMessages] = useState({});
  const [successMessages, setSuccessMessages] = useState({});
  const [email, setEmail] = useState('');

  const isItemInCart = (itemId) => {
    return insuranceItems.some(item => item.id === itemId);
  };

  const handleAddToCart = (insurance) => {
    const value = inputValues[insurance.id];
    if (value > 0 && value < 99) {
      if (!isItemInCart(insurance.id)) {
        addToCart(insurance.id, value);
        setEditingStates(prevState => ({
          ...prevState,
          [insurance.id]: false
        }));
        setErrorMessages(prevState => ({
          ...prevState,
          [insurance.id]: ''
        }));
        setSuccessMessages(prevState => ({
          ...prevState,
          [insurance.id]: 'Your request has been added to the cart.'
        }));
        setTimeout(() => {
          setSuccessMessages(prevState => ({
            ...prevState,
            [insurance.id]: ''
          }));
        }, 3000);
      } else {
        setErrorMessages(prevState => ({
          ...prevState,
          [insurance.id]: 'This item is already in the cart'
        }));
      }
    } else {
      setErrorMessages(prevState => ({
        ...prevState,
        [insurance.id]: 'This number is unacceptable'
      }));
    }
  };

  const handleInputChange = (id, event) => {
    const { value } = event.target;
    setInputValues(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleEditClick = (id) => {
    setEditingStates(prevState => ({
      ...prevState,
      [id]: true
    }));
  };

  const goToCart = () => {
    navigate('/Cart', { state: { email } });
  };

  return (
    <Container>
      <Row>
        {INSURES.map((insurance) => (
          <Col key={insurance.id} xs={12} sm={6} md={4} lg={3} className='mb-4'>
            <Card className='h-100'>
              {insurance.image && <Card.Img variant="top" src={insurance.image} />}
              <Card.Body>
                <Card.Title className='insurencename'>Insurance: {insurance.name}</Card.Title>
                <Card.Text>
                  Price: ${insurance.price}
                </Card.Text>
                {editingStates[insurance.id] ? (
                  <div>
                    <input
                      type="number"
                      value={inputValues[insurance.id] || ''}
                      onChange={(event) => handleInputChange(insurance.id, event)}
                      min="1"
                      max="90"
                      className='form-control'
                    />
                    <p className='error-message'>{errorMessages[insurance.id]}</p>
                    <Button variant="secondary" onClick={() => handleAddToCart(insurance)}>
                      Add to Cart
                    </Button>
                  </div>
                ) : (
                  <Button variant="primary" onClick={() => handleEditClick(insurance.id)}>Click to edit</Button>
                )}
                {successMessages[insurance.id] && (
                  <p className='success-message'>{successMessages[insurance.id]}</p>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Button className='add-btn-ins' variant="primary" onClick={goToCart}>
        Go to Cart
      </Button>
    </Container>
  );
};

export default Insurance;
