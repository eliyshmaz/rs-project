import React from 'react';
import { OPTIONS } from '../data/assete/OPTIONS';
import Option from './Option';

const House = () => {
    return (
        <div className='row'>
            {OPTIONS.map((optionData) => (
                <Option key={optionData.id} data={optionData} />
            ))}
        </div>
    );
}

export default House;
