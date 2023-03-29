import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import coffee from './coffee.jpg'

function Naving() {
  return (
    <div> 
      <Navbar bg="secondary" variant="dark">
        <Container>
            <Navbar.Brand href="#home">
            <img src={coffee} width={35} height={35} alt=""/>
            </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://www.thirdwavecoffeeroasters.com/blogs/blog/15-most-popular-types-of-coffee-drinks">Coffees</Nav.Link>
            <Nav.Link href="https://www.dreamscoops.com/flavors/most-popular-ice-cream-flavors/">Icecreams</Nav.Link>
            <Nav.Link href="#https://www.masterclass.com/articles/a-guide-to-pastries">Pastries</Nav.Link>
            <Nav.Link href="https://www.thespruceeats.com/milkshake-recipes-you-must-try-2098298">Milkshakes</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Naving