import React from 'react';
import './wrapper.css';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';

function Wrapper() {
    return (
        <div className='wrapper'>
            <Sidebar />
            <Main />
        </div>
    );
}
export default Wrapper;
