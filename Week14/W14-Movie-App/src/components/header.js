import React from 'react';
import { Nav } from 'react-bootstrap'

class Header extends React.Component {
    render() {
        return(
            <div className='card-header border border-light bg-dark'>
                <h1>{this.props.name}</h1>
                <div className='card-body border border-secondary bg-light'>
                    <Nav justify variant="tabs" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/home" className='text'>Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1" className='text'>Movies</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2" className='text'>Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
                <div className='bg-dark'>
                <br></br>
                    <h2>Now Playing</h2>
                </div>
            </div>
        );
    }
}

export default Header