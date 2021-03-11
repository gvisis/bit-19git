import React from 'react';
import './wrapper.css';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
import useStarred from './Main/useStarred';
import gvisis from '../../data/gvisis.json';

function Wrapper() {
    const { result, isPending, error } = useStarred(
        'https://api.github.com/users/gvisis/starred?per_page=1'
    );
    return (
        <div className='wrapper'>
            {error && <div>{error}</div>}
            {isPending && <div>Loading</div>}
            <Sidebar gvisis={gvisis} />
            {result && <Main starred={result} gvisis={gvisis} />}
        </div>
    );
}
export default Wrapper;
