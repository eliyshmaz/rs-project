import React, { useContext, useEffect, useState } from 'react';
import WOW from 'wowjs';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Make sure to import Link if needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faLocationDot, faRulerCombined, faBed, faBuildingWheat } from '@fortawesome/free-solid-svg-icons';
import { HouseContext } from './Housecontext';
import App from '../data/assete/assete/icon-apartment.png';
import Villa from '../data/assete/assete/icon-villa.png';
import Home from '../data/assete/assete/icon-house.png';
import Office from '../data/assete/assete/icon-condominium.png';
import Garage from '../data/assete/assete/icon-neighborhood.png';
import Shop from '../data/assete/assete/icon-luxury.png';
import bil from '../data/assete/assete/icon-building.png';
import baner from '../data/assete/assete/baner.png';
import ins from '../data/assete/assete/ins.png';
import za from '../data/assete/assete/za.png';
import { OPTIONS } from '../data/assete/OPTIONS';
import './page.css';
import 'animate.css/animate.min.css';




const propertyTypes = [
  { icon: App, name: 'Apartment', count: 11, delay: '0.1s' },
  { icon: Villa, name: 'Villa', count: 111, delay: '0.3s' },
  { icon: Home, name: 'Home', count: 111, delay: '0.5s' },
  { icon: Office, name: 'Office', count: 111, delay: '0.7s' },
  { icon: bil, name: 'Building', count: 111, delay: '0.1s' },
  { icon: Shop, name: 'Shop', count: 111, delay: '0.5s' },
  { icon: Garage, name: 'Garage', count: 11, delay: '0.7s' },
];

function TimedCounter({ targetCount, delay }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = 100; // Interval time in milliseconds
    const increment = 1; // Increment value

    const updateCount = () => {
      setCount(prevCount => {
        if (prevCount < targetCount) {
          return Math.min(prevCount + increment, targetCount);
        }
        return targetCount;
      });
    };

    const timer = setInterval(updateCount, interval);

    // Stop timer when count reaches targetCount
    return () => clearInterval(timer);
  }, [targetCount]);

  return (
    <span className="wow fadeIn" data-wow-delay={delay}>
      {count}
    </span>
  );
}

function DarkVariantExample() {
  const { houseItems, addToWish, removeFromWish } = useContext(HouseContext)
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [showMessages, setShowMessages] = useState({});

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  // Assuming id is defined somewhere or passed as a prop
  const id = 1; // Replace with actual logic
  useEffect(() => {
    setIsInWishlist(houseItems.some(item => item.id === id));
  }, [houseItems, id]);

  const handleAddToWish = (id) => {
    const isInWishlist = houseItems.some(item => item.id === id);
    if (isInWishlist) {
      removeFromWish(id);
      setShowMessages(prevState => ({
        ...prevState,
        [id]: { showMessageoff: true }
      }));
      setTimeout(() => {
        setShowMessages(prevState => ({
          ...prevState,
          [id]: { showMessageoff: false }
        }));
      }, 3000);
    } else {
      addToWish(id);
      setShowMessages(prevState => ({
        ...prevState,
        [id]: { showMessage: true }
      }));
      setTimeout(() => {
        setShowMessages(prevState => ({
          ...prevState,
          [id]: { showMessage: false }
        }));
      }, 3000);
    }
  };

  return (
    <>
<Carousel data-bs-theme="dark" className="carousel-custom">
  {[
    { label: 'First slide label', image: baner, buttonText: 'best home for you', link: '/home' },
    { image: ins, buttonText: 'Discover', link: '/insurance' },
  ].map((slide, index) => (
    <Carousel.Item key={index}>
      <div className="carousel-img" style={{ backgroundImage: `url(${slide.image})`, position: 'relative' }}>
        <Link to={slide.link}>
          <button 
            className={`banerbutton ${slide.buttonText === 'Discover' ? 'discover-button' : ''}`}
          >
            {slide.buttonText}
          </button>
        </Link>
      </div>
      <Carousel.Caption>
        <h5>{slide.label}</h5>
        <p>{slide.text}</p>
      </Carousel.Caption>
    </Carousel.Item>
  ))}
</Carousel>



      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
            <h1 className="mb-3 text-findyourplace">find your Place</h1>
            <p className='font'>
              Many options for all people with diverse tastes
            </p>
          </div>
          <div className="scroll-container">
            <div className="scroll-content">
              <div className="scroll-items">
                {propertyTypes.map((item, index) => (
                  <div
                    key={index}
                    className="p-2 mb-4 cartcss"
                    style={{ flex: '0 0 1%', maxWidth: '21%', minWidth: '200px', whiteSpace: 'nowrap' }}
                  >
                    <a className="card d-block text-center text-decoration-none border rounded p-4" href="#">
                      <div className="card-img d-flex justify-content-center align-items-center mb-3">
                        <img className="img-fluid" src={item.icon} alt={item.name} />
                      </div>
                      <h6 className="mb-2">{item.name}</h6>
                      <TimedCounter targetCount={item.count} delay={item.delay} />+
                    </a>
                  </div>
                ))}

                {propertyTypes.map((item, index) => (
                  <div
                    key={`duplicate-${index}`}
                    className="p-2 mb-4 cartcss"
                    style={{ flex: '0 0 1%', maxWidth: '21%', minWidth: '200px', whiteSpace: 'nowrap' }}
                  >
                    <a className="card d-block text-center text-decoration-none border rounded p-4" href="#">
                      <div className="card-img d-flex justify-content-center align-items-center mb-3">
                        <img className="img-fluid" src={item.icon} alt={item.name} />
                      </div>
                      <h6 className="mb-2">{item.name}</h6>
                      <TimedCounter targetCount={item.count} delay={item.delay} />+
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="container-xxl py-5 about-section ">
        <div className="container">
          <div className="row g-5 align-items-center ">
            <div className="col-lg-6 wow fadeIn rentyourplace" data-wow-delay="0.1s">
              <div className="rentyourplace">
                <img className="w-100 rentyourplace" src={za} alt="About" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">#1 Place To Find The Perfect Property</h1>
              <p className="mb-4">
                Ready to rent out your property with ease? We’re here to help you find reliable tenants quickly! With our extensive network and expert marketing strategies
              </p>
              <p><i className="fa fa-check text-primary me-3"></i>  your home will be in front of the right renters in no time</p>
              <p><i className="fa fa-check text-primary me-3"></i>  We handle all the details, so you can relax and enjoy the steady income from your rental property</p>
              <a className="btn btn-primary py-3 px-5 mt-3" href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>


      <div className="scroll-container1">
  <div className="scroll-items1">
    {OPTIONS.map((option, index) => (
      <div
        key={index}
        className="p-2 mb-4 property-item"
        style={{ flex: '0 0 auto', maxWidth: '21%', minWidth: '300px', whiteSpace: 'nowrap' }}
      >
        <div className="property-item1 rounded overflow-hidden shadow-sm">
          <div className="position-relative overflow-hidden">
            <Link to={`/Details/${option.id}`}>
              <Card.Img variant="top" src={option.image} alt={`Image of ${option.model}`} />
            </Link>
            <div className="badge bg-primary text-white position-absolute start-0 top-0 m-4 py-1 px-3 rounded">For Rent</div>
            <div className="mb-2 text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3 rounded-top">
              <button
                onClick={() => handleAddToWish(option.id)}
                className={`btn ${houseItems.some(item => item.id === option.id) ? 'btn-success' : 'btn-danger'} rounded-circle mx-auto d-flex align-items-center justify-content-center`}
                style={{ width: '40px', height: '40px' }}
              >
                <FontAwesomeIcon icon={faHeart} />
              </button>
            </div>
          </div>
          <div className="p-0 pb-3">
            <h5 className="lpriceincart">{option.price}$</h5>
            <p className="p-0 h5 model">{option.model}</p>
            <div className="address-main">
              <FontAwesomeIcon className="iconaddress" icon={faLocationDot} />
              <p className="address1">address is private</p>
            </div>
          </div>
          <div className="d-flex border-top border-secondary">
            <small className="flex-fill text-center border-end py-2 border-secondary">
              <FontAwesomeIcon className="iconaddress fs-5" icon={faRulerCombined} /> {option.size}m²
            </small>
            <small className="flex-fill text-center border-end py-2 border-secondary">
              <FontAwesomeIcon className="iconaddress fs-5" icon={faBed} /> {option.bedroom}
            </small>
            <small className="flex-fill text-center py-2">
              <FontAwesomeIcon className="iconaddress fs-5" icon={faBuildingWheat} /> {option.city} - {option.codePostal}
            </small>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>



    </>
  );
}

export default DarkVariantExample;
