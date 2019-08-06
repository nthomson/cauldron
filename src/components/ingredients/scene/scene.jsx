import React from 'react';
import classnames from 'classnames';
import './scene.scss';

const Scene = ({ children, className, btns }) => (
    <div className={classnames('scene', className)}>
        <h4>Setting The Scene</h4>
        <p>{children}</p>
        { btns }
    </div>
);

export default Scene;