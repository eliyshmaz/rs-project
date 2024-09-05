
import React from 'react';
import { useParams } from 'react-router-dom';
import { OPTIONS } from '../data/assete/OPTIONS'

const DetailsComponent = () => {
    const { id } = useParams();
    const item = OPTIONS.find(option => option.id === parseInt(id));

    if (!item) {
        return <div>Item not found</div>;
    }

    return (
        <div>
            <h1>{item.model}</h1>
            <img src={item.image} alt={item.model} />
            <p>Size: {item.size}</p>
            <p>Balcony: {item.balcony ? 'Yes' : 'No'}</p>
            <p>Bedroom: {item.bedroom}</p>
            <p>Price: {item.price}</p>
            <p>Building Maintenance Fee: {item.buildingmaintenancefee}</p>
            <p>Smoking: {item.smoking ? 'Yes' : 'No'}</p>
            <img src={item.map} alt="Map" />
        </div>
    );
};

export default DetailsComponent;
