import React from "react";
import LikeButton from "./like-button";
import ReplyButton from "./reply-button";

// JSX METHOD \\

export default class Comment extends React.Component {
    render() {
        return (
            <div className="card w-75">
                <div className="card-header bg-primary text-white">
                    Username and Time
                </div>
                <div className="card-body">
                    Comment Content
                </div>
                <div className="card-footer">
                    <LikeButton />
                    <ReplyButton />
                </div>
            </div>
        );
    }
}

/* 

// ORIGINAL "React.createElement" METHOD USING JAVASCRIPT \\

let e = React.createElement;

export default class Comment extends React.Component {
    render() {
        return e('div', 
            {class: 'card w-75'},
            e('div', {class: 'card-hearder bg-primary text-white'}, 'Username and Time'),
            e('div', {class: 'card-body'}, 'Comment Content'),
            e('div', {class: 'card-footer'},
            e(LikeButtom, {}, null),
            e('span', {}, ' '),
            e(ReplyButton, {}, null))
        );
    }
}

*/