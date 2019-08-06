import React from 'react';
import classnames from 'classnames';
import './text.scss';

const Text = ({ as, className, children, btns }) => {
    const Element = as || 'p';
    return (
        <div className={classnames('text', className)}>
            <Element>
                { children }
            </Element>
            { btns }
        </div>
    )
};

export default Text;