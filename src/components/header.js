import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/i-logo.png';
import { HoverButtons } from './common/button/i-button';

const IHeader= () =>{
  return (
    <Navbar bg="light" expand="lg" className="i-header">
      <Container>
      <Navbar.Brand href="#home" className="p-0">
            <img
              src={logo}
              className="d-inline-block align-top p-0"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <HoverButtons Title={["Home", "Services", "Speciality", "Contact Us"]} />
             
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default IHeader;