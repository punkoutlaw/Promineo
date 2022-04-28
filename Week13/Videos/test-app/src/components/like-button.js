import React from 'react';

// JSX METHOD \\

export default class LikeButton extends React.Component {
    render() {
        return (
            <button className='btn btn-primary'>Like</button>
        );
    }
}

/*

// ORIGINAL "React.createElement" METHOD USING JAVASCRIPT \\

export default class LikeButton extends React.Component {
    render() {
        return React.createElement('button', {class: 'btn btn-primary'}, 'Like');
    }
}

*/