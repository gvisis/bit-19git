import React from 'react';
import '../css/main.css';
import { useParams } from 'react-router-dom';
import useFetch from '../../useFetch';

const convertedDate = (date) => {
    return new Date(date).toLocaleDateString();
};

export default function Main() {
    const { login } = useParams();

    const { data, error, isPending } = useFetch(`https://api.github.com/users/${login}`);
    const { data: repos } = useFetch(
        `https://api.github.com/users/${login}/repos?sort=created&per_page=15`
    );

    const style = {
        backgroundColor: 'lightpink',
    };
    return (
        <main className='main-content-wrap'>
            {isPending && <div className='user-header'>Loading content...</div>}
            {error && (
                <div style={style} className='user-header'>
                    {error}
                </div>
            )}
            {data && repos && (
                <div className='user-header'>
                    <img src={data.avatar_url} alt={data.login} />
                    <div className='user-info'>
                        <a href={data.html_url} className='title' alt={data.login}>
                            <div className='title name'>{data.name ? data.name : ''}</div>
                            {data.login}
                        </a>
                        <div className='followers'>{data.followers} followers</div>
                        <div className='following'>{data.following} following</div>
                    </div>
                </div>
            )}
            {repos && (
                <div className='user-repo-wrap'>
                    {repos.map((repo) => (
                        <a className='title' href={repo.html_url}>
                            <div className='user-repo' key={repo.id}>
                                {repo.name}
                                <p className='repo-descr'>{repo.description}</p>
                                <span className='repo-language'>{repo.language} </span>
                                <span className='repo-update'>
                                    Last updated: {convertedDate(repo.updated_at)}
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            )}
        </main>
    );
}
