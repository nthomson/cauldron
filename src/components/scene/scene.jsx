import React from 'react';
import './scene.scss';

const Scene = ({ children }) => (
    <div className='scene'>
        <h4>Setting The Scene</h4>
        <p>{children}</p>
    </div>
);

export default Scene;