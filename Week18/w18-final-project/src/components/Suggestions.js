import React from 'react'
import '../styles/css/suggestions.css';
import Profile from './Profile';


const Suggestions = () => {
  return (
    <div className='suggestions'>
        <div className='titleContainer'>
            <div className='title'>Suggestions For You</div>
            <a href='/'>See All</a>
        </div>
        <Profile
         caption='Followed by tpetty + 3 more' 
         urlText='Follow' 
         iconSize='medium' 
         captionSize='small' 
         storyBorder={true}
         />
            <Profile
         caption='Follows you' 
         urlText='Follow' 
         iconSize='medium' 
         captionSize='small' 
         storyBorder={true}
         />
            <Profile
         caption='Followed by kcobain + 8 more' 
         urlText='Follow' 
         iconSize='medium' 
         captionSize='small' 
         storyBorder={true}
         />
            <Profile
         caption='Followed by awinehouse + 7 more' 
         urlText='Follow' 
         iconSize='medium' 
         captionSize='small' 
         storyBorder={true}
         />
            <Profile
         caption='Follows you' 
         urlText='Follow' 
         iconSize='medium' 
         captionSize='small' 
         storyBorder={true}
         />
    </div>
  )
}

export default Suggestions