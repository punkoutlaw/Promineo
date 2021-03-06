import React from 'react';
import '../styles/css/cards.css';
import Stories from './Stories';
import Card from './Card';

const Cards = () => {
  const commentsOne = [
    {
      user: 'tpetty',
      text: 'Keep on rockin\'! πΈ',
      id: 1,
    },
  ]
  const commentsTwo = [
    {
      user: 'mmonroe',
      text: 'Sending lots of love! Boop boop be do! π',
      id: 2,
    },
    {
      user: 'mjackson',
      text: 'You wanna be startin\' somethin\'? π₯·',
      id: 3,
    },
  ]
  const commentsThree = [
    {
      user: 'jlennon',
      text: 'Imagine, all the people π­',
      id: 4,
    },
    {
      user: 'gharrison',
      text: 'My guitar gently weeps... πΈπ₯²',
      id: 5,
    },
    {
      user: 'shoon',
      text: 'I like watching the puddles gather rain π¦οΈ',
      id: 6,
    },
]
  return (
    <div className='cards'>
        <Stories />
        <Card 
          accountName='shoon' 
          storyBorder={true} 
          image='https://picsum.photos/800/500' 
          comments={commentsOne} 
          likedByText='gharrison' 
          likedByNumber={87} 
          hours={8} />
           <Card 
          accountName='tpetty' 
          storyBorder={true} 
          image='https://picsum.photos/700/500' 
          comments={commentsTwo} 
          likedByText='jlennon' 
          likedByNumber={100} 
          hours={10} />
           <Card 
          accountName='mjackson' 
          storyBorder={true} 
          image='https://picsum.photos/600/500' 
          comments={commentsThree} 
          likedByText='mmonroe' 
          likedByNumber={200} 
          hours={23} />
    </div>
  );
}

export default Cards