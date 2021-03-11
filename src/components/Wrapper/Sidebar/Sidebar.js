import React from 'react';
import './sidebar.css';
import students from './students.json';

function Sidebar() {
    return (
        <div className='student-list'>
            {students.map((student) => (
                <a className='student' href={student.url}>
                    <img
                        src='https://avatars.githubusercontent.com/u/31749032?s=460&u=efe3f0e7d3f9f4be8199f51f1377bc58799b8e31&v=4'
                        alt={student.name}
                    />
                    <span>{student.name}</span>
                </a>
            ))}
            ;
        </div>
    );
}

export default Sidebar;
