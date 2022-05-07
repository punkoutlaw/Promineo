import React from 'react'
import { CardGroup, Card } from 'react-bootstrap'
import Stars from './stars';

class Main extends React.Component {
    render() {
        return(
            <CardGroup>
                <Card border='primary'>
                    <Card.Img variant="top" src="https://static.free-putlockers.com/dist/images/McpiUC-e_JqUZKWBZZT0GJ7mUQ7KsPfDtKRKQ-tiCPmIuPm9m6bsHaMBPxo-WCAWgbydIVeNpoV9t-w_aME5RLOjJeb6LLXKjbZX3Xiotdyb1nDGfoNftJLgmTnV7_9u.jpg" />
                    <Card.Body>
                    <Card.Title>Harry Potter and the Goblet of Fire</Card.Title>
                    <Card.Text>
                    <p>Harry Potter finds himself competing in a hazardous tournament between rival schools of magic, but he is distracted by recurring nightmares.</p>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">2005 • PG-13 • 2h 37m</small>
                    </Card.Footer>
                </Card>
                <Card border='primary'>
                    <Card.Img variant="top" src="https://th.bing.com/th/id/R.ea6fb4e0a4674574a344134063d68475?rik=p%2b73sLjtfftJ4w&riu=http%3a%2f%2forig00.deviantart.net%2f4737%2ff%2f2016%2f202%2fb%2f2%2fstephen_king_s_it__2017____poster___1_by_camw1n-daa4tl6.jpg&ehk=cMXs7fWyY0zEpXJMlfmG4bgHefwVOSDDSyeBp9XjA8M%3d&risl=&pid=ImgRaw&r=0" />
                    <Card.Body>
                    <Card.Title>IT</Card.Title>
                    <Card.Text>
                    <p>In the summer of 1989, a group of bullied kids band together to destroy a shape-shifting monster, which disguises itself as a clown and preys on the children of Derry, their small Maine town.{' '}</p>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">2017 • R • 2h 15m</small>
                    </Card.Footer>
                </Card>
                <Card border='primary'>
                    <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BMzY1ZjMwMGEtYTY1ZS00ZDllLTk0ZmUtYzA3ZTA4NmYwNGNkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_FMjpg_UX1000_.jpg" />
                    <Card.Body>
                    <Card.Title>Almost Famous</Card.Title>
                    <Card.Text>
                    <p>A high-school boy in the early 1970s is given the chance to write a story for Rolling Stone magazine about an up-and-coming rock band as he accompanies them on their concert tour.</p>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">2000 • R • 2h 2m</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        );
    }
}

export default Main