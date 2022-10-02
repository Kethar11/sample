import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/img/i-logo.png';
import { HoverButtons } from './common/button/i-button';

const IHeader= ({headerRef, contactRef, footerRef}) =>{
  const navigate = useNavigate();
  const title =[
    {name:"Home", route:"home" },
    {name:"Services", route:"services" },
    {name:"Speciality", route:"speciality" },
    {name:"Contact Us", route:"contact" },

  ]
  return (
    <Navbar bg="light" expand="lg" className="i-header">
      <Container>
      <Navbar.Brand  className="p-0" onClick={()=>navigate('/')}>
            <img
              src={logo}
              className="d-inline-block align-top p-0"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <HoverButtons Title={title} navigation={true} navigate={navigate} headerRef={headerRef} contactRef={contactRef} footerRef={footerRef}/>
             
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default IHeader;