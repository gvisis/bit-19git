import React from 'react';
import './main.css';
import useFetch from '../../../useFetch';
import repos from '../../../data/repos';

export default function Main({ starred, gvisis }) {
    // const { repos, isPending, error } = useFetch(
    //     'https://api.github.com/users/gvisis/repos?sort=created&per_page=10'
    // );
    console.log(repos);
    return (
        <>
            {/* {isPending && <div>Loading</div>}
            {error && <div>{error}</div>} */}
            <main className='main-content-wrap'>
                <div className='user-header'>
                    <img src={gvisis.avatar_url} alt={gvisis.login} />
                    <div className='user-info'>
                        <a href={gvisis.html_url} className='user-name' alt={gvisis.login}>
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
                            <a href={repo.html_url}>{repo.name}</a>
                            <p>{repo.description}</p>
                            <p>
                                {repo.language} {repo.updated_at}
                            </p>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}
