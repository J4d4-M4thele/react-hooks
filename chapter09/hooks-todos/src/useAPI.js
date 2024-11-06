import React, {useEffect, useState} from 'react';
import axios from 'axios';

const useAPI = (endpoint) => {
    const [data, setData] = useState([]);

    //calls data once component is mounted
    useEffect(async () => {
        getData()
    }, []);

    const getData = async () => {
        const response = await axios.get(endpoint)
        setData(response.data) 
    };
    
    return data;
}

export default useAPI;
