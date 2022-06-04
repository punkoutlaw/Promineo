import React from 'react';
import Navigation from './Navigation';
import { Card, Container, Col, Row } from 'react-bootstrap';
import ProfileIcon from './ProfileIcon';
import image from '../images/Dave_headshot.jpg';

const ProfilePage = () => {
  return (
    <div>
        <Navigation />
        <main style={{ padding: "2rem 0" }}>
        <Card>
            <Card.Header>
                <div className='menu'>
                <span><strong>Profile Page</strong>  &nbsp; </span><ProfileIcon className='icon' iconSize='medium' image={image}/>
                </div>
                </Card.Header>
            <Card.Body>
                <Card.Title></Card.Title>
                <Container fluid>
                <Card.Text className='profileBody'>
                    <Row md={12}>
                            <Col xs={4}><img src='https://picsum.photos/100/250' className='profileImg'/></Col>
                            <Col xs={4}><img src='https://picsum.photos/200/250' className='profileImg'/></Col>
                            <Col xs={4}><img src='https://picsum.photos/300/250' className='profileImg'/></Col>
                        </Row>
                        <br></br>
                        <Row md={12}>
                            <Col xs={4}><img src='https://picsum.photos/400/250' className='profileImg'/></Col>
                            <Col xs={4}><img src='https://picsum.photos/500/250' className='profileImg'/></Col>
                            <Col xs={4}><img src='https://picsum.photos/600/250' className='profileImg'/></Col>
                        </Row>
                </Card.Text>
                </Container>
            </Card.Body>
            <Card.Footer> © 2022 INSTAGRAM FROM META </Card.Footer>
        </Card>
        </main>
    </div>
  )
}

export default ProfilePage