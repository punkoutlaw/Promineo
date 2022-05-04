import React from "react";
import LikeButton from "./like-button";
import ReplyButton from "./reply-button";

/* 

// ADDING PROPS INTO REACT, METHOD 2 \\

Note, to access props, you would use the syntax "{this.props.yourpropId}" w/ "yourpropId" being a placeholder for whatever your prop is named.

*/

export default class Comment extends React.Component {
    render() {
        return (
            <div className="card w-75">
                <div className="card-header bg-primary text-white">
                    {this.props.username} {this.props.date}
                </div>
                <div className="card-body">
                    {this.props.content} 
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

// ADDING PROPS INTO JAVASCRIPT, METHOD 1 \\

export default class Comment extends React.Component {
    render() {
        return (
            <div className="card w-75">
                <div className="card-header bg-primary text-white">
                    Username and Time
                </div>
                <div className="card-body">
                    {this.props.content} 
                </div>
                <div className="card-footer">
                    <LikeButton />
                    <ReplyButton />
                </div>
            </div>
        );
    }
}

*/