import React from 'react';
import ReplyButton from './reply-button';
import LikeButton from './like-button';
import Comment from './comment';

// JSX METHOD \\

export default class Post extends React.Component {
    render() {
        return (
            <div className='card w-75'>
                <div className='card-header bg-primary text-white'>
                    Username and Time
                </div>
                    <div className='card-body'>
                        Post Content
                    </div>
                    <div className='card-footer'>
                        <LikeButton />
                        <ReplyButton />
                        <Comment />
                        <Comment />
                        <Comment />
                    </div>
            </div>
        );
    }
}

/*

// ORIGINAL "React.createElement" METHOD USING JAVASCRIPT \\

let e = React.createElement;

export default class Post extends React.Component {
    render() {
        return e('div', 
            {class: 'card w-75'},
            e('div', {class: 'card-hearder bg-primary text-white'}, 'Username and Time'),
            e('div', {class: 'card-body'}, 'Post Content'),
            e('div', {class: 'card-footer'},
            e(LikeButton, {}, null),
            e('span', {}, ' '),
            e(ReplyButton, {}, null),
            e('br', {}, null),
            e(Comment, {}, null),
            e(Comment, {}, null))
        );
    }
}

*/