import React from 'react';
import Post from './post';

// MAKING COMPONENTS DYNAMIC BY USING THE "STATE" \\

export default class NewsFeed extends React.Component {
    render() {
        let comments = [
           {
                content: 'This is my post.',
                username: 'David',
                date: '5/2/2022'
            },
            {
                content: 'No, this is my post!',
                username: 'Mike',
                date: '5/3/2022'
            },
            {
                content: 'Stop copying my comments y\'all.',
                username: 'Bry',
                date: '5/4/2022'
            }
        ];
        return (
            <div className='container'>
                <Post {...{comments: comments, content: 'This is my post content!'}}/>
                <Post {...{content: 'Here is another post!'}}/>
                <Post />
            </div>
        );
    }
}

/*

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