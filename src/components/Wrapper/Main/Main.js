import React from 'react';
import './main.css';

export default function Main() {
    return (
        <main className='main-content-wrap'>
            <div className='user-header'>
                <img
                    src='https://avatars.githubusercontent.com/u/31749032?s=460&u=efe3f0e7d3f9f4be8199f51f1377bc58799b8e31&v=4'
                    alt='user'
                />
                <div className='user-info'>
                    <span className='user-name'>Name</span>
                    <span className='followers'>8 followers</span>
                    <span className='following'>4 following</span>
                    <span className='stars'>stars 33</span>
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
