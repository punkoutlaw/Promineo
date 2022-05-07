import React from 'react';
import { Nav } from 'react-bootstrap'

class Header extends React.Component {
    render() {
        return(
            <div className='card-header border border-primary bg-secondary'>
                <h1>MovieRaters</h1>
                <div className='card-body bg-light'>
                    <Nav justify variant="tabs" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Movies</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
            </div>
        );
    }
}

export default Header