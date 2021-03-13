import React from 'react';
import '../css/sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar({ students }) {
    return (
        <div className='student-list'>
            {students.map((student, index) => (
                <Link key={index} className='student' to={`/student/${student.login}`}>
                    {student.name}
                </Link>
            ))}
        </div>
    );
}

export default Sidebar;
