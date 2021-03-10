import React from 'react';
import './sidebar.css';
import studentsData from './students';

function Sidebar() {
    return (
        <div className='student-list'>
            { studentai}
        </div>
    );
}

for (const { name, url } of studentsData) {
    console.log(name);
    console.log(url);
}

function studentai() {

    let allStudents = [];
    for (let i = 0; i < 5; i++) {
        allStudents.push(`<a href='#' className='student'>
        <img src='https://avatars.githubusercontent.com/u/31749032?s=460&u=efe3f0e7d3f9f4be8199f51f1377bc58799b8e31&v=4' alt='name' />
        <span>Vardas</span>
        </a>`);
    }
    return allStudents;
}

export default Sidebar;