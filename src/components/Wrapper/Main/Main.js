import React from 'react';
import './main.css';
import useFetch from '../../../useFetch';

export default function Main() {
    const { data } = useFetch('https://api.github.com/users/gvisis');
    console.log(data);

    return (
        <main className='main-content-wrap'>
            <div className='user-header'>
                <img
                    src='https://avatars.githubusercontent.com/u/31749032?s=460&u=efe3f0e7d3f9f4be8199f51f1377bc58799b8e31&v=4'
                    alt='user'
                />
                <div className='user-info'>
                    <h3 className='user-name'>Name</h3>
                    <div className='followers'>8 followers</div>
                    <div className='following'>4 following</div>
                    <div className='stars'>stars 33</div>
                </div>
            </div>
            <div className='user-repo-wrap'>
                <div className='user-repo'>
                    <h3>bank</h3>
                    <p>php homework</p>
                    <p>PHP updated 2 hours ago</p>
                </div>
                <div className='user-repo'>
                    <h3>bank</h3>
                    <p>php homework</p>
                    <p>PHP updated 2 hours ago</p>
                </div>
                <div className='user-repo'>
                    <h3>bank</h3>
                    <p>php homework</p>
                    <p>PHP updated 2 hours ago</p>
                </div>
                <div className='user-repo'>
                    <h3>bank</h3>
                    <p>php homework</p>
                    <p>PHP updated 2 hours ago</p>
                </div>
            </div>
        </main>
    );
}
