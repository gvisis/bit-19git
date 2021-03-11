import React from 'react';
import './sidebar.css';

function Sidebar({ gvisis }) {
    console.log(gvisis);
    return (
        <div className='student-list'>
            {gvisis && (
                <a className='student' href={`${gvisis.html_url}`} key={gvisis.id}>
                    <img src={gvisis.avatar_url} alt={gvisis.name} />
                    <span>{gvisis.login}</span>
                </a>
            )}
        </div>
    );
}

export default Sidebar;
