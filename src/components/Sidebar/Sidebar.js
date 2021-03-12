import React, { useState } from 'react';
import './sidebar.css';
import students from '../../data/students.json';
import { Link } from 'react-router-dom';
import axios from 'axios';

axios.defaults.headers.common['Authorization'] = 'ce4bfe1258c1b948cee6ea6a80a6075705f8fd48';

function Sidebar() {
    // const [name, setName] = useState(null);
    // const [id, setId] = useState(null);
    // const [html_url, setUrl] = useState(null);
    // const [avatar, setAvatar] = useState(null);
    // const [login, setLogin] = useState(null);

    return (
        <div className='student-list'>
            {students.map((student) => (
                <Link
                    key={student.name}
                    // onClick={() => handleClick(student.login)}
                    className='student'
                    to={`/student/${student.login}`}
                >
                    <img src='#' />
                    <span>{student.name}</span>
                </Link>
            ))}
        </div>
    );
}

export default Sidebar;
