import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, NavbarBrand, Container } from 'reactstrap'

const Header = () => {
  return (
      <div className='container'>
            <Navbar color='dark' dark>
                <Container>
                        <Nav>
                            <NavbarBrand className='p-1' href="/">My Team</NavbarBrand>
                                <NavItem>
                                    <Link className='btn btn-primary float-right' to='/add'>Add User</Link>
                                </NavItem>
                        </Nav>
                </Container>
            </Navbar>
        </div>
  )
}

export default Header