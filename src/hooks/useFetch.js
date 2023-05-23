
import axios from 'axios';
import {useEffect,useState} from 'react';

export const useFetch = (furl,ftimes) =>{
    const [isLoading, setisLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    async function loadURL(url,times=5){

        return axios.get(url).then((response)=>{
                const data = response;
                return data;
        }).catch((e)=>{
            if(times===0)
                throw e;
            return loadURL(url,--times);
        })
    }

    useEffect(()=>{
        const response = loadURL(furl,ftimes);
        response.then((res)=>{
            setData(res);
        }).catch((e)=>{
            setError(`couldn't fetch data after ${ftimes} tries.`)
        }).finally(()=>{
            setisLoading(false);
        });
    },[]);

    return {data,error,isLoading};
}