import React, { useState, useEffect, useContext } from 'react';
import { OPTIONS } from '../data/assete/OPTIONS';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ErrorMessage } from '@hookform/error-message';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBuildingWheat, faLocationDot, faRulerCombined, faBed } from '@fortawesome/free-solid-svg-icons';
import { HouseContext } from './Housecontext';
import Card from 'react-bootstrap/Card';
import './page.css';


export const Home = ({ data = {} }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedModel, setSelectedModel] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [showOnlyWithBalcony, setShowOnlyWithBalcony] = useState(false);
    const [showOnlyWithsmook, setShowOnlyWithsmook] = useState(false);
    const [Minprice, setMinprice] = useState('');
    const [Maxprice, setMaxprice] = useState('');
    const [perssone, setperssone] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { houseItems, addToWish, removeFromWish } = useContext(HouseContext);
    const [showMessages, setShowMessages] = useState({});
    const { id } = data;

    const handleModelChange = (event) => {
        setSelectedModel(event.target.value);
    };

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    };

    const handleShowOnlyWithBalconyChange = (event) => {
        setShowOnlyWithBalcony(event.target.checked);
    };

    const handleShowOnlyWithsmookChange = (event) => {
        setShowOnlyWithsmook(event.target.checked);
    };

    useEffect(() => {
        if (id) {
            setShowMessages(prevState => ({
                ...prevState,
                [id]: { isInWishlist: houseItems.some(item => item.id === id), showMessage: false, showMessageoff: false }
            }));
        }
    }, [houseItems, id]);

    const handleFilter = (data) => {
        setIsLoading(true);
        const { codepsotal } = data;

        let filtered = OPTIONS.filter(item =>
            item.model.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (!codepsotal || item.codepsotal.toString().includes(codepsotal))
        );

        if (selectedModel) {
            filtered = filtered.filter(item => item.model === selectedModel);
        }
        if (selectedCity) {
            filtered = filtered.filter(item => item.city === selectedCity);
        }

        if (showOnlyWithsmook) {
            filtered = filtered.filter(item => item.smoking === true);
        }

        if (showOnlyWithBalcony) {
            filtered = filtered.filter(item => item.balcony === true);
        }

        if (Minprice && Maxprice) {
            filtered = filtered.filter(item =>
                item.price >= parseInt(Minprice) && item.price <= parseInt(Maxprice)
            );
        } else if (Minprice) {
            filtered = filtered.filter(item => item.price >= parseInt(Minprice));
        } else if (Maxprice) {
            filtered = filtered.filter(item => item.price <= parseInt(Maxprice));
        }

        if (perssone) {
            if (perssone === "4+") {
                filtered = filtered.filter(item => item.people >= 4);
            } else {
                filtered = filtered.filter(item => item.people >= parseInt(perssone));
            }
        }

        setTimeout(() => {
            setFilteredData(filtered);
            setShowResults(true);
            setIsLoading(false);
        }, 888);
    };

    const handleAddToWish = (id) => {
        const isInWishlist = houseItems.some(item => item.id === id);
        if (isInWishlist) {
            removeFromWish(id);
            setShowMessages(prevState => ({
                ...prevState,
                [id]: { ...prevState[id], showMessageoff: true }
            }));
            setTimeout(() => {
                setShowMessages(prevState => ({
                    ...prevState,
                    [id]: { ...prevState[id], showMessageoff: false }
                }));
            }, 3000);
        } else {
            addToWish(id);
            setShowMessages(prevState => ({
                ...prevState,
                [id]: { ...prevState[id], showMessage: true }
            }));
            setTimeout(() => {
                setShowMessages(prevState => ({
                    ...prevState,
                    [id]: { ...prevState[id], showMessage: false }
                }));
            }, 3000);
        }
        setShowMessages(prevState => ({
            ...prevState,
            [id]: { ...prevState[id], isInWishlist: !isInWishlist }
        }));
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit(handleFilter)}>
                <div className="mb-3">
                    <label htmlFor="model" className="form-label">Select a model:</label>
                    <select id="model" name="model" value={selectedModel} onChange={handleModelChange} className="form-select">
                        <option value="">All models</option>
                        <option value="studio">Studio</option>
                        <option value="house">House</option>
                        <option value="apartment">Apartment</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="city" className="form-label">Select a city:</label>
                    <select id="city" name="city" value={selectedCity} onChange={handleCityChange} className="form-select">
                        <option value="">All cities</option>
                        <option value="brussels">Brussels</option>
                    </select>
                </div>

                <div className="mb-3">
                    <input
                        type="number"
                        placeholder="Enter codepsotal..."
                        className="form-control"
                        {...register('codepsotal', {
                            minLength: {
                                value: 4,
                                message: 'Postal code must be 4 digits'
                            }
                        })}
                    />
                    <ErrorMessage errors={errors} name="codepsotal" render={({ message }) => <p style={{ color: 'red' }}>{message}</p>} />
                </div>

                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        id="showOnlyWithBalcony"
                        className="form-check-input"
                        onChange={handleShowOnlyWithBalconyChange}
                    />
                    <label htmlFor="showOnlyWithBalcony" className="form-check-label">Has Balcony</label>
                </div>
                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        id="showOnlyWithSmook"
                        className="form-check-input"
                        onChange={handleShowOnlyWithsmookChange}
                    />
                    <label htmlFor="showOnlyWithSmook" className="form-check-label">Smoking Allowed</label>
                </div>

                <div className="mb-3">
                    <label>Min Price:</label>
                    <input
                        type="number"
                        value={Minprice}
                        className="form-control"
                        onChange={(e) => setMinprice(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label>Max Price:</label>
                    <input
                        type="number"
                        value={Maxprice}
                        className="form-control"
                        onChange={(e) => setMaxprice(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label>perssone:</label>
                    <select
                        value={perssone}
                        className="form-control"
                        onChange={(e) => setperssone(e.target.value)}
                    >
                        <option value="">for how Many personne</option>
                        <option value="1">1 perssones</option>
                        <option value="2">2 perssones</option>
                        <option value="3">3 perssones</option>
                        <option value="4">4 perssones</option>
                        <option value="4+">4+ perssones</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-success btn-primary '">Submit</button>
            </form>

            {isLoading && <span className="loader"></span>}

            {showResults && !isLoading && (
                <div className="row mt-4">
                    {filteredData.length > 0 ? (
                        filteredData.map(item => (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                                <div className="property-item rounded overflow-hidden shadow-sm">
                                    <div className="position-relative overflow-hidden">
                                        <Link to={`/Details/${item.id}`}>
                                            <Card.Img variant="top" src={item.image} alt={`Image of ${item.model}`} />
                                        </Link>
                                        <div className="badge bg-primary text-white position-absolute start-0 top-0 m-4 py-1 px-3 rounded">For Rent</div>
                                        <div className=" mb-2 text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3 rounded-top">
                                            <button
                                                onClick={() => handleAddToWish(item.id)}
                                                className={`btn ${showMessages[item.id]?.isInWishlist ? 'btn-success' : 'btn-danger'} rounded-circle mx-auto mt-3 d-flex align-items-center justify-content-center`}
                                                style={{ width: '40px', height: '40px' }}
                                            >
                                                <FontAwesomeIcon icon={faHeart} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="p-0 pb-3">
                                        <h5 className="lpriceincart">{item.price}$</h5>
                                        <p className="p-0 h5 model">{item.model}</p>
                                        <div className="address-main">
                                            <FontAwesomeIcon className="iconaddress" icon={faLocationDot} />
                                            <p className="address1">address is privete</p>
                                        </div>
                                    </div>

                                    <div className="d-flex border-top border-secondary">
                                        <small className="flex-fill text-center border-end py-2 border-secondary"><i className="fa fa-ruler-combined  me-2"><FontAwesomeIcon className='iconaddress fs-5' icon={faRulerCombined} /></i>{item.size}m²</small>
                                        <small className="flex-fill text-center border-end py-2 border-secondary"><i className="fa fa-bed  me-2"><FontAwesomeIcon className='iconaddress fs-5' icon={faBed} /></i>{item.bedroom}</small>
                                        <small className="flex-fill text-center py-2"><i className="fa fa-bath  me-2"><FontAwesomeIcon className='iconaddress fs-5' icon={faBuildingWheat} /></i>{item.city}-{item.codepsotal}</small>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No results found</p>
                    )}
                </div>
            )}
        </div>
    );
};
