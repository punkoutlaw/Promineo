import React from 'react';
import '../styles/menu.css';
import '../styles/navigation.css';
import '../styles/App.css';
import { ReactComponent as Home } from '../images/home.svg';
import { ReactComponent as Inbox } from '../images/inbox.svg';
import { ReactComponent as NewPost } from '../images/newpost.svg';
import { ReactComponent as Explore } from '../images/explore.svg';
import { ReactComponent as Notifications } from '../images/notifications.svg';
import image from '../images/Dave_headshot.jpg';
import ProfileIcon from './ProfileIcon';

const Menu = () => {
  return (
    <div className='menu'>
        <Home className="icon" />
        <Inbox className="icon" />
        <NewPost className='icon' />
        <Explore className="icon" />
        <Notifications className="icon" />
        <ProfileIcon iconSize='small' image={image}/>
    </div>
  )
}

export default Menu