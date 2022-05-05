import React from 'react';
import ReplyButton from './reply-button';
import LikeButton from './like-button';
import Comment from './comment';

/*

// MAKING COMPONENTS DYNAMIC BY USING THE "STATE" \\

Please note - you HAVE to include "props" in your constructor, then you can use it inside each component.
You always need to call the "super" constructor on the 1st line, then pass the props in.

*/

export default class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            content: props.content
        };
    }
    render() {
        let comments = [];
        if(this.state.comments) {
            for(let comment of this.state.comments) {
                comments.push(<Comment {...comment}/>);
            }
        }
        return (
            <div className='card w-75'>
                <div className='card-header bg-primary text-white'>
                    Username and Time
                </div>
                    <div className='card-body'>
                        {this.state.content}
                    </div>
                    <div className='card-footer'>
                        <LikeButton />
                        <ReplyButton />
                        {comments}
                    </div>
            </div>
        );
    }
}

/*

// ADDING PROPS INTO REACT, METHOD 2 \\

export default class Post extends React.Component {
    render() {
        let commentOne = {
            content: 'This is my post.',
            username: 'David',
            date: '5/2/2022'
        };
        let commentTwo = {
            content: 'No, this is my post!',
            username: 'Mike',
            date: '5/3/2022'
        };
        let commentThree = {
            content: 'Stop copying my comments y\'all.',
            username: 'Bry',
            date: '5/4/2022'
        };
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
                        <Comment {...commentOne}/>
                        <Comment {...commentTwo}/>
                        <Comment {...commentThree}/>
                    </div>
            </div>
        );
    }
}

// ADDING PROPS INTO REACT, METHOD 1 \\

You can add a prop to the end of your component using the syntax "<MyComponent content="This is my prop content." w/ "content" being the name of your prop."

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
                        <Comment content="This is my post."/>
                        <Comment content="No, this is my post!"/>
                        <Comment content="Stop copying my comments y'all."/>
                    </div>
            </div>
        );
    }
}

*/