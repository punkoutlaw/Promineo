import React from 'react'
import '../styles/sidebar.css';
import Sticky from 'react-sticky-el';
import Profile from './Profile';
import Suggestions from './Suggestions';
import Footer from './Footer';
import image from '../images/Dave_headshot.jpg';

{/* The Sticky component & topOffset will make it stick to the top of the page */}

const Sidebar = () => {
  return (
    <Sticky topOffset={-80}>
        <div className='sidebar'>
            <Profile 
                username='david.feudale'
                caption='David Feudale' 
                urlText='Switch' 
                iconSize='big' 
                image={image}
            />
            <Suggestions />
            <Footer />
        </div>
    </Sticky>
  )
}

export default Sidebar