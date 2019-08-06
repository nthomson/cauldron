import React, { useState } from 'react';
import './monster-search.scss';
import useDataFetcher from '../../utils/use-data-fetcher';

const MonsterSearch = ({ onSelectMonster }) => {
    const [term, setTerm] = useState();
    const { fetching, results } = useDataFetcher({ term, type: 'monsters' });

    return (
        <div className='monster-search'>
            <input type='text' value={term} onChange={e => { setTerm(e.target.value); }} />
            { !fetching
                ? <ul className='search-results'>
                    { results.slice(0, 10).map(result => (
                        <li onClick={() => { onSelectMonster(result.index); }}>{result.name}</li>
                    )) }
                </ul> : null }
        </div>
    );
}

export default MonsterSearch;