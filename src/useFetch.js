import { useState, useEffect } from 'react';
import axios from 'axios';
axios.defaults.headers.common['Authorization'] = 'ce4bfe1258c1b948cee6ea6a80a6075705f8fd48';

// const useFetch = (url) => {
//     const [data, setData] = useState(null);
//     const [isLoading, setisLoading] = useState(true);
//     const <div error,="" setErorr=""></div> = useState(null);

//     useEffect(() => {
//         axios(url)
//             .then((res) => {
//                 if (res.status > 200) {
//                     throw Error('Could not fetch the data for that resource');
//                 }
//                 setisLoading(false);
//                 setErorr(null);
//                 setData(res.data);
//             })
//             .catch((err) => {
//                 if (err.name === 'AbortError') {
//                     console.log('fetch aborted');
//                 } else {
//                     setisLoading(false);
//                     setErorr(err.message);
//                 }
//             });
//     }, []);

//     return { data, isLoading, Error };
// };

// import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setErorr] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        fetch(url, { signal: abortCont.signal })
            .then((res) => {
                console.log(res);
                if (!res.ok) {
                    throw Error('Could not fetch the data for that resource');
                }
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setData(data);
                setIsPending(false);
                setErorr(null);
            })
            .catch((err) => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    setIsPending(false);
                    setErorr(err.message);
                }
            });
        return () => abortCont.abort();
    }, [url]);

    return { data, isPending, error };
};

export default useFetch;
