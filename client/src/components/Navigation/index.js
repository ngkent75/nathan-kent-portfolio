import { Navbar, Nav } from 'react-bootstrap';
import './index.css';

function Navigation() {
  return (
    <div>
      <Navbar bg="dark" expand="lg" className='text-white p-3'>
        <Navbar.Brand href="/" className='text-white navcustom1'>Nathan Kent</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbar-dark' />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="mr-auto">
            <Nav.Link href="/about" className='text-white navcustom2'>About</Nav.Link>
            <Nav.Link href="/projects" className='text-white navcustom2'>Projects</Nav.Link>
            <Nav.Link href="/contact" className='text-white navcustom2'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
