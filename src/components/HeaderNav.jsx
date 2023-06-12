//Components react-Bootstrap
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';

//React Router Dom
import { NavLink, Link } from 'react-router-dom';

//Components
import { CardWidget } from './CardWidget';

//Styles
import '../styles/styles.css'

 export const HeaderNav = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <img alt='' src='/src/assets/code.png' width={33} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to={'/'}>Home</Link>
            </Nav.Link>
            <Nav.Link href="#">Pricing</Nav.Link>
            <NavDropdown title="Categories" id="collasible-nav-dropdown" className='bg-dark'>
              <NavDropdown.Item >
                <NavLink to={'/category/men'}>Men's clothing</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <NavLink to={'/category/women'}>Women's clothing</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to={'/category/jewelry'}>Jewerly</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                <NavLink to={'/category/electronics'}>electronics</NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <CardWidget/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}