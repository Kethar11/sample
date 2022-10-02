import { Container } from "react-bootstrap";
import ContactUs from "../components/common/contactUs";
import IFooter from "../components/footer";
import IHeader from "../components/header";
import Sidebar from "../components/sideMenu";

const Speciality = () => {

    return (
        <>
            <IHeader />
            <div className="landing-page">  
            <Sidebar />
            <Container>
            <h1>Speciality</h1>
            </Container>
            <ContactUs />
            </div>
            <IFooter />
            
        </>
            
      );
  }
  
  export default Speciality;
  