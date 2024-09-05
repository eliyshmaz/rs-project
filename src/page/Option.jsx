import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faHeart, faLocationDot, faRulerCombined, faBed, faBuildingWheat } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HouseContext } from './Housecontext';
import './page.css';

const Option = (props) => {
    const { model, size, image, price, id, bedroom, city, codepsotal } = props.data;
    const { houseItems = [], addToWish, removeFromWish } = useContext(HouseContext); // مقداردهی اولیه آرایه خالی
    const [showMessage, setShowMessage] = useState(false);
    const [isInWishlist, setIsInWishlist] = useState(false);
    const [showMessageoff, setShowMessageoff] = useState(false);

    useEffect(() => {
        // اطمینان از اینکه houseItems یک آرایه است
        setIsInWishlist(houseItems?.some(item => item.id === id));
    }, [houseItems, id]);

    const handleAddToWish = () => {
        if (isInWishlist) {
            removeFromWish(id);
            setShowMessageoff(true);
            setTimeout(() => {
                setShowMessageoff(false);
            }, 3000);
        } else {
            addToWish(id);
            setShowMessage(true);
            setTimeout(() => {
                setShowMessage(false);
            }, 3000);
        }
    };

    return (
        <>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="property-item rounded overflow-hidden shadow-sm">
                    <div className="position-relative overflow-hidden">
                        <Link to={`/Details/${id}`}>
                            <Card.Img variant="top" src={image} alt={`Image of ${model}`} />
                        </Link>
                        <div className="badge bg-primary text-white position-absolute start-0 top-0 m-4 py-1 px-3 rounded">For Rent</div>
                        <div className=" mb-2 text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3 rounded-top">
                            <button
                                onClick={handleAddToWish}
                                className={`btn ${isInWishlist ? 'btn-success' : 'btn-danger'} rounded-circle mx-auto d-flex align-items-center justify-content-center`}
                                style={{ width: '40px', height: '40px' }}
                            >
                                <FontAwesomeIcon icon={faHeart} />
                            </button>
                        </div>
                    </div>
                    <div className="p-0 pb-3">
                        <h5 className="lpriceincart">{price}$</h5>
                        <p className="p-0 h5 model">{model}</p>
                        <div className="address-main">
                            <FontAwesomeIcon className="iconaddress" icon={faLocationDot} />
                            <p className="address1">address is private</p>
                        </div>
                    </div>

                    <div className="d-flex border-top border-secondary">
                        <small className="flex-fill text-center border-end py-2 border-secondary"><i className="fa fa-ruler-combined me-2"><FontAwesomeIcon className='iconaddress fs-5' icon={faRulerCombined} /></i>{size}m²</small>
                        <small className="flex-fill text-center border-end py-2 border-secondary"><i className="fa fa-bed me-2"><FontAwesomeIcon className='iconaddress fs-5' icon={faBed} /></i>{bedroom}</small>
                        <small className="flex-fill text-center py-2"><i className="fa fa-bath me-2"><FontAwesomeIcon className='iconaddress fs-5' icon={faBuildingWheat} /></i>{city}-{codepsotal}</small>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Option;
