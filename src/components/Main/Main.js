import React from 'react';
import './main.css';
import repos from '../../data/repos.json';
import { useHistory, useParams } from 'react-router';
import axios from 'axios';

const convertedDate = (date) => {
    return new Date(date).toLocaleDateString();
};

export default function Main({ starred, gvisis }) {
    const { login } = useParams();

    const { studentName, id, html_url, avatar } = axios
        .get('https://api.github.com/users/' + login)
        .then((data) => {
            console.log(data.data);
            return {
                studentName: data.data.name,
                id: data.data.id,
                html_url: data.data.html_url,
                avatar: data.data.avatar_url,
            };
        })
        .catch((err) => console.log(err.message));

    console.log(studentName);
    return (
        <>
            {/* {isPending && <div>Loading</div>}
            {error && <div>{error}</div>} */}
            <main className='main-content-wrap'>
                <div className='user-header'>
                    <img src={avatar} alt={login} />
                    <div className='user-info'>
                        <a href={html_url} className='title' alt={login}>
                            {login}
                        </a>
                        <div className='followers'>{gvisis.followers} followers</div>
                        <div className='following'>{gvisis.following} following</div>
                        <div className='stars'>{starred} starred</div>
                    </div>
                </div>
                {/* <div className='user-repo-wrap'>
                    {repos.map((repo) => (
                        <div className='user-repo' key={repo.id}>
                            <a className='title' href={repo.html_url}>
                                {repo.name}
                            </a>
                            <p className='repo-descr'>{repo.description}</p>
                            <span className='repo-language'>{repo.language} </span>
                            <span className='repo-update'>
                                Last updated: {convertedDate(repo.updated_at)}
                            </span>
                        </div>
                    ))}
                </div> */}
            </main>
        </>
    );
}
