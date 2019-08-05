import React from 'react';

const Column = ({ size, children }) => (
    <div className={`col${size}`}>
        {children}
    </div>
);

export default Column;