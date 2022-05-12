import React from "react";
import { CardGroup, Card } from 'react-bootstrap'

const MovieImages = () => {
  return (
    <div className="card-body bg-secondary">
        <CardGroup>
            <Card border='primary'>
            <div className='card-img'>
                <Card.Img variant="top" src="https://static.free-putlockers.com/dist/images/McpiUC-e_JqUZKWBZZT0GJ7mUQ7KsPfDtKRKQ-tiCPmIuPm9m6bsHaMBPxo-WCAWgbydIVeNpoV9t-w_aME5RLOjJeb6LLXKjbZX3Xiotdyb1nDGfoNftJLgmTnV7_9u.jpg" />
            </div>
            <div className='card-img'>
                <Card.Img variant="top" src="https://th.bing.com/th/id/R.ea6fb4e0a4674574a344134063d68475?rik=p%2b73sLjtfftJ4w&riu=http%3a%2f%2forig00.deviantart.net%2f4737%2ff%2f2016%2f202%2fb%2f2%2fstephen_king_s_it__2017____poster___1_by_camw1n-daa4tl6.jpg&ehk=cMXs7fWyY0zEpXJMlfmG4bgHefwVOSDDSyeBp9XjA8M%3d&risl=&pid=ImgRaw&r=0" />
            </div>
            <div className='card-img'>
                <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BMzY1ZjMwMGEtYTY1ZS00ZDllLTk0ZmUtYzA3ZTA4NmYwNGNkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_FMjpg_UX1000_.jpg" />
            </div>
            </Card>
        </CardGroup>
    </div>
  )
}

export default MovieImages