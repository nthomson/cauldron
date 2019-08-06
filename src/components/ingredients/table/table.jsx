import React from 'react';
import classnames from 'classnames';
import './table.scss';

const Table = ({className, btns}) => (
    <div className={classnames('table', className)}>
        <table>
            <thead>
                <tr>
                    <th>d6</th>
                    <th>Motivations for joining</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Riches. You seek gold and treasure.</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Violence. You take pleasure in cruelty and killing</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>You are not a Dark Elf, but wish to be considered a citizen.</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>You are loyal to The Empire and wish to serve your Lord.</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>You were a criminal and you've joined in order to pay your debt to The Empire</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>One of your friends dared you and now you think it's too late to back out.</td>
                </tr>
            </tbody>
        </table>
        {btns}
    </div>
);

export default Table;