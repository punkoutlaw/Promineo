import React from 'react'
import '../styles/menu.css'
import '../styles/App.css'
import { ReactComponent as Home } from '../images/home.svg';
import { ReactComponent as Inbox } from '../images/inbox.svg';
import { ReactComponent as NewPost } from '../images/newpost.svg'
import { ReactComponent as Explore } from '../images/explore.svg';
import { ReactComponent as Notifications } from '../images/notifications.svg';

const Menu = () => {
  return (
    <div className='menu'>
        <Home className="icon" />
        <Inbox className="icon" />
        <NewPost className='icon' />
        <Explore className="icon" />
        <Notifications className="icon" />
        {/* {profileIconComponent} */}
    </div>
  )
}

export default Menu