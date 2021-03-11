import { useEffect, useState } from 'react';
import axios from 'axios';
import parse from 'github-parse-link';

const useStarred = (url) => {
    const [result, setResult] = useState(null);
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
                setResult(parse(res.headers.link)['last'].split('&page=')[1]);
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
    return { result, isPending, Error };
};

export default useStarred;
