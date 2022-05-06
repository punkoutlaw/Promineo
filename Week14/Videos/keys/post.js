import React from 'react';
import ReplyButton from './reply-button';
import LikeButton from './like-button';
import Comment from './comment';

// ADDING KEY VALUES TO PROPS \\

export default class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            content: props.content,
        };
    }
    render() {
        
// We will be revsing the if statement to add key values to our props:

        let comments;
        if(this.state.comments) {
            comments = this.state.comments.map((comment, index) => <Comment key={index} {...comment} />)
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

// MAKING COMPONENTS DYNAMIC BY USING THE "STATE" \\

Please note - you HAVE to include "props" in your constructor, then you can use it inside each component.
You always need to call the "super" constructor on the 1st line, then pass the props in.

*setTimeout needs to be done within the render, because every time you set the state it will re-render the component and it will create an infinite loop*
The setState takes an object as its 1st parameter (content: 'state update') for example.

It can also take a second parameter, which is called a "callback" which is followed by the 1st parameter using a comma to seperate them.
Example: , () => setTimeout(() => this.setState({comments: tempComments}), 2000)). notice this is directly followed by the 1st parameter, but before the timeout.

Note: You must NOT use "this.sate" or "this.props" directly in the updated values of the state.
Example: this.setState({count: this.state.count + 1}) - it will update both values asynchronously and you cannot rely on the values.

Instead, use the overriding of this.setState which takes the previous styate as an argument.
Example: this.setState(state => ({count: state.count + 1})) which will return the object {}.

Furthermore, you can add 2nd argument that would update your props.

Example: this.setState((state, props) => ({count: state.count + 1})) which will return the object {}.


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