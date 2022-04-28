import React from "react";
import LikeButtom from "./like-button";
import ReplyButton from "./reply-button";

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
