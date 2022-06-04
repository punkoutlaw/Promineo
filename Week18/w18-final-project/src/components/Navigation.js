import React from 'react'
import '../styles/css/App.css'
import logo from '../images/instagram-logo.png'
import searchIcon from '../images/searchIcon.png'
import Menu from './Menu.js';

const Navigation = () => {
  return (
    <div className='navigation'>
        <div className='container'>
            <img className='logo' src={logo} alt='instagram logo'/>
              <input type='text' placeholder='Search' className='search'></input>
            <Menu />
        </div>
    </div>
  )
}

export default Navigation