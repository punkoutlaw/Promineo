import React from 'react';
import '../styles/css/cardMenu.css';
import { ReactComponent as Share } from '../images/share.svg';
import { ReactComponent as Comments } from '../images/comments.svg';
import { ReactComponent as Notifications } from '../images/notifications.svg';
import { ReactComponent as Bookmark } from '../images/bookmark.svg';

const CardMenu = () => {
  return (
    <div className='cardMenu'>
        <div className='interactions'>
            <Notifications className='icon'/>
            <Comments className='icon' />
            <Share className='icon' />
        </div>
        <Bookmark className='icon' />
    </div>
  )
}

export default CardMenu