import { Col, Container, Row } from "react-bootstrap";

const ContactUs= ({contactRef}) =>{
    return(
    <div ref={contactRef} className="i-contact">
        <Container>        
        <div className="overlay-bg"></div>
          <Row className="contact-text">
            <h2 className="text-light text-center head-text">Contact Us</h2>
            <Col lg={6} xl={6} className="mb-4">
                
              <p className="text-light my-4 bounce"> <i className="fas fa-map-marker-alt me-3"></i>
              <span className="text-light">ILINK Development Services Pte. Ltd.</span></p>

              <p className="text-light ct-mail shakescale"> <i className="fas fa-envelope me-3"> </i>
              <a href="mailto:info@ilinkdev.in">info@ilinkdev.in </a></p>

              <p className="text-light ct-number shake"> <i className="fas fa-phone-alt me-3"> </i>
              <a href="tel:+91 9945482812">+91 9945482812 (Support)</a></p>
            </Col>
            <Col lg={6} xl={6}>
              <h3 className="text-200 my-4">Registered Offices </h3>
              <h4>India</h4>
              <p className="text-light my-4 bounce"> <i className="fas fa-map-marker-alt me-3"></i>
              <span className="text-light">No. 43(5), Mangalam Road, Parapalayam, Tirupur, Tamil Nadu  &nbsp;</span>
              <br />641 605, India</p>
              <h4>Singapore</h4>
              <p className="text-light my-4 bounce"> <i className="fas fa-map-marker-alt me-3"></i>
              <span className="text-light">35, Selegie Road, # 09-02, Parklane Shopping Mall, Singapore  &nbsp;</span>
              <br />188307</p>
            </Col>
          </Row>
        </Container>
    </div>
    )

}

export default ContactUs;
