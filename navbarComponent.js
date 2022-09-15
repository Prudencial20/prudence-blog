
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from './Images/Logo.png'
import Image from 'react-bootstrap/Image';

const NavbarComponent = () => {
  const styleNav = {
    marginLeft: '250px'
}
    return ( 
        <div className='navbar'>
            <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Image src={Logo} className='navHead' width="250px"/>
        {/* <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={styleNav} >
            {/* <Nav.Link href="/clothings">Clothings</Nav.Link> */}
            <Nav.Link href="/" className='nav-buttons'>HOME</Nav.Link>
            {/* <Nav.Link href="/childrenWears">Kids</Nav.Link> */}
            {/* <Nav.Link href="/femaleWears">Ladies</Nav.Link> */}
            {/* <Nav.Link href="/maleWears">Men</Nav.Link> */}
            <Nav.Link href="/about" className='nav-buttons'>ABOUT US</Nav.Link>
            <NavDropdown title="COLLECTIONS" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/childrenWears">Children wears</NavDropdown.Item>
              <NavDropdown.Item href="/femaleWears">
                Female Wears
              </NavDropdown.Item>
              <NavDropdown.Item href="/maleWears">Male wears</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/signIn" className='nav-buttons'>SIGN UP</Nav.Link>
            {/* <Nav.Link href="/signIn">LOG IN</Nav.Link> */}
            <Nav.Link href="/shop" className='nav-buttons'>SHOP NOW</Nav.Link>
            <Nav.Link href="/logIn" className='nav-buttons'>USER ACCOUNT</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
     );
}
 
export default NavbarComponent;


