import React from 'react';
import './item.scss';

const Item = ({ name, type, children }) => (
    <div className='item'>
        { name ? <h4>{name}</h4> : null }
        { type ? <div className='type'>{type}</div> : null }
        { children ? 
            <div className='description'>
                {children}
            </div> : null }
    </div>
);

export default Item;