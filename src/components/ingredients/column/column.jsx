import React from 'react';
import classnames from 'classnames';
import './column.scss';

const Column = ({ size, className, children, btns }) => {
    className = classnames('col', 'col-'+size, className);

    return (
        <div className={className}>
            {children}
            {btns}
        </div>
    );
};

export default Column;