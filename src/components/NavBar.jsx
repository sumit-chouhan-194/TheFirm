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
                <li><a href="#">Solutions</a></li>
                <li><a href="#">Cases</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
    </Nav>
    </>
  )
}

export default NavBar