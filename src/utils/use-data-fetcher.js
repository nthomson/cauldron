import { useState, useEffect } from 'react';
import axios from 'axios';

const srd = axios.create({
    baseURL: 'http://localhost:5000/api'
});

const useDataFetcher = ({ type, id }) => {
    const [fetching, setFetching] = useState(true);
    const [monster, setMonster] = useState({});

    useEffect(() => {
        setFetching(true);
        srd.get(`/${type}/${id}`)
            .then((res) =>{
                setMonster(res.data);
                setFetching(false);
            });
    }, [type, id]);
    
    
    return {
        monster,
        fetching
    }
};



export default useDataFetcher;