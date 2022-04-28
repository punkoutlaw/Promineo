import React from 'react';
import ReplyButton from './reply-button';
import LikeButtom from './like-button';
import Comment from './comment';

let e = React.createElement;

export default class Post extends React.Component {
    render() {
        return e('div', 
            {class: 'card w-75'},
            e('div', {class: 'card-hearder bg-primary text-white'}, 'Username and Time'),
            e('div', {class: 'card-body'}, 'Post Content'),
            e('div', {class: 'card-footer'},
            e(LikeButtom, {}, null),
            e('span', {}, ' '),
            e(ReplyButton, {}, null),
            e('br', {}, null),
            e(Comment, {}, null),
            e(Comment, {}, null))
        );
    }
}