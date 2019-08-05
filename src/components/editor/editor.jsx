import React, { useState } from 'react';
import { Scene, Item, Page, StatBlock, Table, Column } from '../';

import './editor.scss';

const Editor = () => {
    const [brew, setBrew] = useState([]);

    const addCol = (item) => {
        item.children = [
            ...(item.children || []),
            { element: 'col', size: '50' }
        ];
        setBrew([...brew]);
    };

    const addStat = (item) => {
        item.children = [
            ...(item.children || []),
            { element: 'statBlock', monsterId: 50 }
        ];
        setBrew([...brew]);
    };

    const addEle = (item, type) => {
        item.children = [
            ...(item.children || []),
            { element: type, children: 'Lorem Ipsum dolor site amet.' }
        ];
        setBrew([...brew]);
    };

    const addPage = () => {
        setBrew([
            ...brew,
            { element: 'page' }
        ]);
    };

    const elements = {
        page: { ele: Page, addBtns: [
            { fn: addCol, type: 'Col' },
            { fn: addEle, type: 'h1' }
        ] },
        item: { ele: Item },
        scene: { ele: Scene },
        statBlock: { ele: StatBlock },
        table: { ele: Table },
        col: {
            ele: Column,
            addBtns: [
                { fn: addStat, type: 'stat'},
                { fn: addEle, type: 'scene'},
                { fn: addEle, type: 'table'},
                { fn: addEle, type: 'p'},
                { fn: addEle, type: 'h1'},
                { fn: addEle, type: 'h2'},
                { fn: addEle, type: 'h3'}
            ]
        }
    };

    const itemRender = (item, index) => {
        const { element: eleType, children: eleChildren, ...props } = item;
        const Element = elements[eleType] ? elements[eleType].ele : eleType;
        const addBtns = elements[eleType] ? elements[eleType].addBtns : [];

        return (
            <Element {...props} key={index}>
                { Array.isArray(eleChildren) ? eleChildren.map(itemRender) : eleChildren }
                { addBtns
                    ? addBtns.map(btn => <button onClick={() => { btn.fn(item, btn.type); }}>+{btn.type}</button>)
                    : null }
            </Element>
        );
    }

    return (
        <div className='editor'>
            <div className='container'>
                { brew.map(itemRender) }
                <button onClick={addPage} type='button' className='btn'>New Page</button>
            </div>
        </div>
    );
};

export default Editor;

