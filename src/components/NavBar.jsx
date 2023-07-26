import React from 'react'
import { Nav } from 'react-bootstrap'

const NavBar = () => {
  return (
    <>
    <Nav>
        <div>
            <div className="logo"></div>
            <ul>
                <li><a href="#">Home</a></li>
            </ul>
        </div>
    </Nav>
    </>
  )
}

export default NavBar