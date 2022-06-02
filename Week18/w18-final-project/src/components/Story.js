import React from 'react';
import '../styles/story.css';
import ProfileIcon from './ProfileIcon';
import users from '../data/users';

const Story = () => {
    // This function will pick a random username from the users.js file:
    let accountName = users[Math.floor(Math.random() * users.length)].username;

    if(accountName.length > 10) {
        accountName = accountName.substring(0, 10) + '...';
    }

  return (
    <div className='story'>
        <ProfileIcon iconSize='big' storyBorder={true}/>
        <span className='accountName'>{accountName}</span>
    </div>
  )
}

export default Story