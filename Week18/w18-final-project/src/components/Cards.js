import React from 'react';
import '../styles/cards.css';
import Stories from './Stories';
import Card from './Card';

const Cards = () => {
  const commentsOne = [
    {
      user: 'tpetty',
      text: 'Keep on rockin\'! 🎸',
      id: 1,
    },
  ]
  const commentsTwo = [
    {
      user: 'mmonroe',
      text: 'Sending lots of love! Boop boop be do! 💕',
      id: 2,
    },
    {
      user: 'mjackson',
      text: 'You wanna be startin\' somethin\'? 🥷',
      id: 3,
    },
  ]
  const commentsThree = [
    {
      user: 'jlennon',
      text: 'Imagine, all the people 💭',
      id: 4,
    },
    {
      user: 'gharrison',
      text: 'My guitar gently weeps... 🎸🥲',
      id: 5,
    },
    {
      user: 'shoon',
      text: 'I like watching the puddles gather rain 🌦️',
      id: 6,
    },
]
  return (
    <div className='cards'>
        <Stories />
        <Card 
          accountName='shoon' 
          storyBorder={true} 
          image='https://picsum.photos/800/1000' 
          comments={commentsOne} 
          likedByText='gharrison' 
          likedByNumber={87} 
          hours={8} />
           <Card 
          accountName='tpetty' 
          storyBorder={true} 
          image='https://picsum.photos/800/900' 
          comments={commentsTwo} 
          likedByText='jlennon' 
          likedByNumber={100} 
          hours={10} />
           <Card 
          accountName='mjackson' 
          storyBorder={true} 
          image='https://picsum.photos/800/500' 
          comments={commentsThree} 
          likedByText='mmonroe' 
          likedByNumber={200} 
          hours={23} />
    </div>
  );
}

export default Cards