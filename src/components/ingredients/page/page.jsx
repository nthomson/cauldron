import React from 'react';
import classnames from 'classnames';
import './page.scss';

const Page = ({ children, title, className, btns }) => (
    <section className={classnames('page', className)}>
        { title
            ? (
                <div className='col col-100'>
                    <h1>{ title }</h1>
                </div>
            ) : null }
        {children}
        { btns }
    </section>
);

export default Page;