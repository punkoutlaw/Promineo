import React from 'react';
import Navigation from './Navigation';
import { Card } from 'react-bootstrap';

const ProfilePage = () => {
  return (
    <div>
        <Navigation />
        <main style={{ padding: "2rem 0" }}>
        <Card>
            <Card.Header><h2>Profile Page</h2></Card.Header>   
            <Card.Body>
                <Card.Title> Hello </Card.Title>
                <Card.Text> Let's do this. </Card.Text>
            </Card.Body>
            <Card.Footer> © 2022 INSTAGRAM FROM META </Card.Footer>
        </Card>
        </main>
    </div>
  )
}

export default ProfilePage