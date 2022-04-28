import React from 'react';

// JSX METHOD \\

export default class LikeButtom extends React.Component {
    render() {
        return (
            <button className='btn btn-primary'>Reply</button>
        );
    }
}

/*

// ORIGINAL "React.createElement" METHOD USING JAVASCRIPT \\

export default class LikeButtom extends React.Component {
    render() {
        return React.createElement('button', {class: 'btn btn-primary'}, 'Reply');
    }
}

*/