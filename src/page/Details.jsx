import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { HouseContext } from './Housecontext';
import { OPTIONS } from '../data/assete/OPTIONS';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { faPrint, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './page.css';

const Details = () => {
    const { id } = useParams();
    const { houseItems, addToWish, removeFromWish } = useContext(HouseContext);
    const houseItem = OPTIONS.find(item => item.id === parseInt(id));

    const isInWishlist = houseItems?.some(item => item.id === parseInt(id));

    const handleAddToWish = () => {
        if (isInWishlist) {
            removeFromWish(parseInt(id));
        } else {
            addToWish(parseInt(id));
        }
    };

    if (!houseItem) {
        return <p>House not found. Please try again later.</p>;
    }

    const { model, size, image, price, map, codepsotal, balcony, adress, smoking } = houseItem;

    const generatePdf = () => {
        const doc = new jsPDF();

        doc.addFont('Arial.ttf', 'Arial', 'normal');
        doc.addFont('times.ttf', 'Times New Roman', 'normal');
        doc.addFont('courier.ttf', 'Courier New', 'normal');

        doc.setFont('times');
        doc.setFontSize(18);

        doc.text('REAL ESTATE', 10, 10);

        doc.setFont('Courier New');
        doc.setFontSize(14);
        doc.text(`Model: ${model}`, 10, 20);
        doc.text(`Size: ${size} M`, 10, 40);
        doc.text(`Price: ${price} $`, 10, 30);

        doc.setFontSize(14);
        doc.text(`Codepsotal: ${codepsotal}`, 10, 50);

        doc.setFontSize(12);
        doc.text(`Balcony: ${balcony ? 'ok' : 'no'}`, 10, 60);
        doc.text(`smoking: ${smoking ? 'ok' : 'no'}`, 80, 60);
        const img = document.getElementById("houseImage");
        if (img.complete) {
            html2canvas(img, { scale: 2 }).then(canvas => {
                const imgData = canvas.toDataURL('image/png');
                doc.addImage(imgData, 'PNG', 10, 80, 180, 160);
                doc.save("house_details.pdf");
            });
        } else {
            img.onload = () => {
                html2canvas(img, { scale: 2 }).then(canvas => {
                    const imgData = canvas.toDataURL('image/png');
                    doc.addImage(imgData, 'PNG', 10, 110, 180, 160);
                    doc.save("house_details.pdf");
                });
            };
        }
    };

    return (
        <div className="container">
            <div className="col-lg-9 col-sm-8">
                <h2>Photos</h2>

                <div className="row">
                    <div className="col-lg-8">
                        <div className="property-images">
                            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators hidden-xs">
                                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                    <li data-target="#myCarousel" data-slide-to="1"></li>
                                    <li data-target="#myCarousel" data-slide-to="2"></li>
                                    <li data-target="#myCarousel" data-slide-to="3"></li>
                                </ol>

                                <Carousel data-bs-theme="dark">
                                    <Carousel.Item>
                                        <img
                                            id="houseImage"
                                            className="d-block w-100"
                                            src={image}
                                            alt="First slide"
                                        />
                                        <Carousel.Caption></Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={image}
                                            alt="Second slide"
                                        />
                                        <Carousel.Caption></Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={image}
                                            alt="Third slide"
                                        />
                                        <Carousel.Caption></Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                                <div className="properties-listing spacer">
                                    <div className="advertisement">
                                        <h4>{model}</h4>
                                        <img src={map} className="img-responsive img-fluid" alt="advertisement" />
                                    </div>
                                </div>
                                <a className="left carousel-control" href="#myCarousel" data-slide="prev"><span className="glyphicon glyphicon-chevron-left"></span></a>
                                <a className="right carousel-control" href="#myCarousel" data-slide="next"><span className="glyphicon glyphicon-chevron-right"></span></a>
                            </div>
                        </div>

                        <div className="spacer">
                            <h4><span className="glyphicon glyphicon-th-list"></span> Properties Detail</h4>
                            <p>Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.</p>
                            <p>Completely synergize resource sucking relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="col-lg-12 col-sm-6">
                            <div className="property-info">
                                <p className="price">{price} €</p>
                                <p className="area"><span className="glyphicon glyphicon-map-marker"></span> 344 Villa, Syndey, Australia</p>

                                <div className="profile">
                                    <span className="glyphicon glyphicon-user"></span> Agent Details
                                    <p>John Parker<br />009 229 2929</p>
                                </div>
                            </div>

                            <h6><span className="glyphicon glyphicon-home"></span> Availabilty</h6>
                            <div className="listing-detail">
                                <span data-toggle="tooltip" data-placement="bottom" title="Bed Room">5</span> <span data-toggle="tooltip" data-placement="bottom" title="Living Room">2</span> <span data-toggle="tooltip" data-placement="bottom" title="Parking">2</span> <span data-toggle="tooltip" data-placement="bottom" title="Kitchen">1</span>
                            </div>

                            <div>
                                <h4><span className="glyphicon glyphicon-map-marker"></span> Location</h4>
                                {adress !== 'none' ? (
                                    <div className="well">
                                        <iframe
                                            style={{
                                                width: '100%',
                                                height: '350px',
                                                border: '0',
                                                margin: '0',
                                                padding: '0',
                                                overflow: 'hidden'
                                            }}
                                            src={adress}
                                        ></iframe>
                                    </div>
                                ) : (
                                    <div className="container">
                                        <div className="alert alert-danger">
                                            Location not found.
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <br />

                        <button className='printbtn' onClick={generatePdf}>
                            <FontAwesomeIcon icon={faPrint} />
                        </button>
                        <button
                            onClick={handleAddToWish}
                            className={`btn ${isInWishlist ? 'heartbtn' : 'heartbtnOFF'}  `}
                        >
                            <FontAwesomeIcon icon={faHeart} />
                        </button>
                        <div className="col-lg-12 col-sm-6">
                            <div className="enquiry">
                                <h6><span className="glyphicon glyphicon-envelope"></span> Post Enquiry</h6>
                                <form role="form">
                                    <input type="text" className="form-control" placeholder="Full Name" />
                                    <input type="text" className="form-control" placeholder="you@yourdomain.com" />
                                    <input type="text" className="form-control" placeholder="your number" />
                                    <textarea rows="6" className="form-control" placeholder="Whats on your mind?"></textarea>
                                    <button type="submit" className="btn btn-primary" name="Submit">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;

