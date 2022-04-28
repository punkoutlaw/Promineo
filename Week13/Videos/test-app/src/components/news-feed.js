import React from 'react';
import Post from './post';

// JSX METHOD \\

export default class NewsFeed extends React.Component {
    render() {
        return (
            <div className='container'>
                <Post />
                <Post />
                <Post />
            </div>
        );
    }
}

/*

// ORIGINAL "React.createElement" METHOD USING JAVASCRIPT \\

let e = React.createElement;

export default class NewsFeed extends React.Component {
    render() {
        return e('div', {class: 'container'},
        e(Post, {}, null),
        e(Post, {}, null),
        e(Post, {}, null));
    }
}

*/