import React, { Fragment, useState } from 'react';

import { Scene, Item, Page, StatBlock, Table, Column, Text } from '../ingredients';
import { Button } from '../ui';
import ItemEditor from '../item-editor';

import './editor.scss';

const Editor = () => {
    const [brew, setBrew] = useState([]);
    const [editing, setEditing] = useState();

    const addCol = (item, size) => {
        item.children = [
            ...(item.children || []),
            { type: 'col', size: size || '50' }
        ];
        setBrew([...brew]);
    };

    const addStat = (item) => {
        item.children = [
            ...(item.children || []),
            { type: 'statBlock', monsterId: 0 }
        ];
        setBrew([...brew]);
    };

    const addEle = (item, type) => {
        item.children = [
            ...(item.children || []),
            { type, children: 'Lorem Ipsum dolor site amet.' }
        ];
        setBrew([...brew]);
    };

    const addText = (item, as) => {
        item.children = [
            ...(item.children || []),
            { type: 'text', as, children: 'Lorem Ipsum dolor site amet.' }
        ];
        setBrew([...brew]);
    };

    const addPage = () => {
        setBrew([
            ...brew,
            { type: 'page' }
        ]);
    };

    const editItem = (item) => {
        setEditing(item);
    };

    const saveEdits = (editedItem) => {
        updateItem(brew, editing, editedItem);
    };

    const updateItem = (list, oldItem, newItem) => {
        const index = list.indexOf(oldItem);
        if (index !== -1) {
            // Update in list
            list[index] = newItem;
            setBrew([...brew]);
        } else {
            list.forEach(listItem => {
                if (Array.isArray(listItem.children)) {
                    updateItem(listItem.children, oldItem, newItem);
                }
            })
        }
    }

    const deleteItem = (list, item) => {
        if (list.includes(item)) {
            // Delete from list
            list.splice(list.indexOf(item), 1);
            setBrew([...brew]);
        } else {
            list.forEach(listItem => {
                if (Array.isArray(listItem.children)) {
                    deleteItem(listItem.children, item);
                }
            })
        }
    };

    const elements = {
        page: {
            ele: Page,
            addBtns: [
                { fn: addCol, type: 50, icon: 'dashboard' },
                { fn: addCol, type: 100, icon: 'horizontal_split' }
            ]
        },
        item: { ele: Item },
        scene: { ele: Scene },
        statBlock: { ele: StatBlock },
        table: { ele: Table },
        text: { ele: Text },
        col: {
            ele: Column,
            addBtns: [
                { fn: addStat, type: 'stat', icon: 'view_array'},
                { fn: addEle, type: 'scene', icon: 'wb_iridescent'},
                { fn: addEle, type: 'table', icon: 'table_chart'},
                { fn: addText, type: 'h1', icon: 'title'}
            ]
        }
    };

    const itemRender = (item, index) => {
        const { type: eleType, children: eleChildren, ...props } = item;
        const Element = elements[eleType] ? elements[eleType].ele : eleType;
        const addBtns = elements[eleType] ? elements[eleType].addBtns : null;
        const native = !elements[eleType];

        const btns = (
            <div className='element-btns'>
                <Button type='icon' onClick={() => { editItem(item); }}>
                    <i className="material-icons">settings</i>
                </Button>
                <Button type='icon' onClick={() => { deleteItem(brew, item); }}>
                    <i className="material-icons">delete</i>
                </Button>
                { addBtns && addBtns.length
                    ? <div className='add-btns'>
                        <i className="material-icons">add</i>
                        { addBtns.map(b => (
                            <Button key={b.type} type='icon' onClick={() => { b.fn(item, b.type); }}>
                                <i className='material-icons'>{b.icon}</i>
                            </Button>
                        ))}
                    </div> : null }
            </div>
        );

        return (
            <Fragment key={index}>
                <Element {...props}  btns={native ? null : btns} className='ingredient'>
                    { Array.isArray(eleChildren) ? eleChildren.map(itemRender) : eleChildren }
                    { native ? btns : null }
                </Element>
            </Fragment>
        );
    }

    return (
        <div className='editor'>
            <div className='container'>
                { brew.map(itemRender) }
                <Button onClick={addPage} type='block'>New Page</Button>
                
            </div>
            { editing ? <ItemEditor item={editing} onItemSave={saveEdits} /> : null }
        </div>
    );
};

export default Editor;

