import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <div className='footer'>
        <ul className='links'>
            <li><a href='/'>About</a></li>
            <li><a href='/'>Help</a></li>
            <li><a href='/'>Press</a></li>
            <li><a href='/'>API</a></li>
            <li><a href='/'>Jobs</a></li>
            <li><a href='/'>Privacy</a></li>
            <li><a href='/'>Terms</a></li>
            <li><a href='/'>Locations</a></li>
            <li><a href='/'>Top Accounts</a></li>
            <li><a href='/'>Hashtags</a></li>
            <li><a href='/'>Language</a></li>
        </ul>
        <div className='copyright'>© 2022 INSTAGRAM FROM META</div>
    </div>
  )
}

export default Footer