import { useState, useEffect } from 'react';
import axios from 'axios';

const srd = axios.create({
    baseURL: 'http://localhost:5000/api'
});

const useDataFetcher = ({ type, id, term }) => {
    const [fetching, setFetching] = useState(true);
    const [result, setResult] = useState({});
    const [results, setResults] = useState([]);

    useEffect(() => {
        setFetching(true);

        if (id) {
            srd.get(`/${type}/${id}`)
                .then((res) =>{
                    setResult(res.data);
                    setFetching(false);
                });
        }
        else if (term) {
            srd.get(`/${type}?name=${term}`)
                .then((res) =>{
                    setResults(res.data.results);
                    setFetching(false);
                });
        }
        
    }, [type, id, term]);
    
    
    return {
        result,
        results,
        fetching
    }
};



export default useDataFetcher;