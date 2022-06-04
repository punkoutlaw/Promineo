import React from 'react';
import { Link } from 'react-router-dom'
import { ReactComponent as Home } from '../images/home.svg';
import { ReactComponent as Inbox } from '../images/inbox.svg';
import { ReactComponent as NewPost } from '../images/newpost.svg';
import { ReactComponent as Explore } from '../images/explore.svg';
import { ReactComponent as Notifications } from '../images/notifications.svg';
import '../styles/css/menu.css';
import '../styles/css/navigation.css';
import '../styles/css/App.css';
import image from '../images/Dave_headshot.jpg';
import ProfileIcon from './ProfileIcon';

const Menu = () => {
  return (
    <div className='menu'>
        <Link to='/'>
          <Home className='icon'/>
        </Link>
        <Link to={"/Inbox"}>
          <Inbox className='icon'/>
        </Link>
        <Link to='/NewPost'>
          <NewPost className='icon'/>
        </Link>
        <Link to='/Explore'>
          <Explore className='icon' />
        </Link>
        <Link to='/Notifications'>
          <Notifications className='icon'/>
        </Link>
        <Link to='/Profile'>
          <ProfileIcon className='icon' iconSize='small' image={image} />
        </Link>
    </div>
  )
}

export default Menu