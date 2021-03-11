import React from 'react';
import './main.css';
import useFetch from '../../../useFetch';
import repos from '../../../data/repos';

const convertedDate = (date) => {
    return new Date(date).toLocaleDateString();
};

export default function Main({ starred, gvisis }) {
    // const { repos, isPending, error } = useFetch(
    //     'https://api.github.com/users/gvisis/repos?sort=created&per_page=10'
    // );

    return (
        <>
            {/* {isPending && <div>Loading</div>}
            {error && <div>{error}</div>} */}
            <main className='main-content-wrap'>
                <div className='user-header'>
                    <img src={gvisis.avatar_url} alt={gvisis.login} />
                    <div className='user-info'>
                        <a href={gvisis.html_url} className='title' alt={gvisis.login}>
                            {gvisis.login}
                        </a>
                        <div className='followers'>{gvisis.followers} followers</div>
                        <div className='following'>{gvisis.following} following</div>
                        <div className='stars'>{starred} starred</div>
                    </div>
                </div>
                <div className='user-repo-wrap'>
                    {repos.map((repo) => (
                        <div className='user-repo'>
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
                </div>
            </main>
        </>
    );
}
