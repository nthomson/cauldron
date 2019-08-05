import React from 'react';
import { NavLink } from "react-router-dom";
import './site-header.scss';

const SiteHeader = () => (
    <div className='site-header'>
        <div className='container'>
            <div className='app-header'>
                <h1>Cauldron</h1>
                <nav className='site-nav'>
                    <NavLink to='/' activeClassName='active' exact>Home</NavLink>
                    <NavLink to='/editor' activeClassName='active' exact>Editor</NavLink>
                </nav>
            </div>
        </div>
        
    </div>
);

export default SiteHeader;