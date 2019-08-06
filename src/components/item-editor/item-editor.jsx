import React, { useState, useEffect } from 'react';
import { Button } from '../ui';
import './item-editor.scss';

const ItemEditor = ({ item, onItemSave }) => {
    const [obj, setObj] = useState(item);

    useEffect(() => {
        setObj(item);
    }, [item]);

    if (!item) { return null; }

    const exclude = [];
    const keys = Object.keys(item).filter(key => !exclude.includes(key));
    

    const updateValue = (key, value) => {
        const newObj = Object.assign({}, obj);
        newObj[key] = value;
        setObj(newObj);
    };

    const saveItem = () => {
        onItemSave(obj);
    };

    return (
        <div className='item-editor'>
            { keys.map(key => (
                <div key={key}>
                    <strong>{key}:</strong>
                    <input type='text' value={obj[key]} onChange={e => { updateValue(key, e.target.value); }} />
                </div>
            ))}

            <Button onClick={saveItem}>
                Save
            </Button>
            
        </div>
    );
};

export default ItemEditor;