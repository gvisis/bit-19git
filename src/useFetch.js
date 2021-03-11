import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setErorr] = useState(null);

    useEffect(() => {
        axios(url)
            .then((res) => {
                if (res.status !== 200) {
                    throw Error('Could not fetch the data for that resource');
                }
                setIsPending(false);
                setErorr(null);
                setData(res.data);
            })
            .catch((err) => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    setIsPending(false);
                    setErorr(err.message);
                }
            });
    }, [url]);
    return { data, isPending, Error };
};

export default useFetch;
