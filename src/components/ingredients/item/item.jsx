import React from 'react';
import classnames from 'classnames';
import './item.scss';

const Item = ({ name, type, className, children, btns }) => (
    <div className={classnames('item', className)}>
        { name ? <h4>{name}</h4> : null }
        { type ? <div className='type'>{type}</div> : null }
        { children ? 
            <div className='description'>
                {children}
            </div> : null }
        { btns }
    </div>
);

export default Item;