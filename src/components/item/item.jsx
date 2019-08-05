import React from 'react';
import './item.scss';

const Item = ({ name, type, children }) => (
    <div className='item'>
        <h4>{name}</h4>
        <div className='type'>{type}</div>
        <div className='description'>
            {children}
        </div>
    </div>
);

export default Item;