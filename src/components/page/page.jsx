import React from 'react';
import './page.scss';

const Page = ({ children, title }) => (
    <section className='page'>
        { title
            ? (
                <div className='col100'>
                    <h1>{ title }</h1>
                </div>
            ) : null }
        {children}
    </section>
);

export default Page;