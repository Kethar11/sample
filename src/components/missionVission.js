import { Container, Row, Col } from "react-bootstrap";

const data= [
    {title : "Our Vision", description: "Establish long-term partnerships with global organizations to providing sustainable services."},
    {title : "Our Mission", description: "Build a responsible business relationship that makes this world a better place."}
]

const MissionVission= () =>{
    return(
        <div>
            <Container>
                <Row className="i-vission">
                    <h2 className="text-center head-text">Welcome to iLink</h2>
                    <p>
                        iLink Development Services believes in share value for our Customers. 
                        Our approach in servicing is the idea that ‘not one solution fits all situations’. 
                        Influence, partnership, supplier maturity, and finance are amongst other factors that play a big role
                        in the potential for success in improving factory performance. We endeavor our vision to improve.
                    </p>                    
                    {data.map(el => 
                    <Col lg={6} sm={12}>
                        <div className="vission_category pt-3 pb-3">
                            <div className="cards_box">
                                <div className="solution_card">
                                    <div className="hover_color_bubble"></div>
                                    <div className="so_top_icon">
                                    {el.title === "Our Vision" ?
                                    <svg fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m14.1407867 2.93112377 2.9296067 2.93112377-2.9296067 2.93112377-2.9296066-2.93112377zm-7.92960658.49715173v4.14293113h-4.14078675v-4.14293113zm10.35196688 10.3573278v4.1429311h-4.1407868v-4.1429311zm-10.35196688 0v4.1429311h-4.14078675v-4.1429311zm7.92960658-13.7856033-5.8592132 5.85189021 5.8592132 5.86224759 5.8592133-5.86224759zm-5.8592132 1.35680994h-8.2815735v8.28586225h8.2815735zm10.3519669 10.35732786h-8.2815735v8.2858622h8.2815735zm-10.3519669 0h-8.2815735v8.2858622h8.2815735z" fill="#000"></path>
                                    </svg>
                                     :
                                    <svg fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m4.08163265 16.3265306c-2.25510204 0-4.08163265-1.8265306-4.08163265-4.0816326 0-2.25510208 1.82653061-4.08163269 4.08163265-4.08163269s4.08163266 1.82653061 4.08163266 4.08163269c0 2.255102-1.82653062 4.0816326-4.08163266 4.0816326zm0-6.122449c-1.12244898 0-2.04081632.9183674-2.04081632 2.0408164 0 1.1224489.91836734 2.0408163 2.04081632 2.0408163s2.04081633-.9183674 2.04081633-2.0408163c0-1.122449-.91836735-2.0408164-2.04081633-2.0408164zm7.08163265-2.04081629c-2.25510203 0-4.08163265-1.82653062-4.08163265-4.08163266s1.82653062-4.08163265 4.08163265-4.08163265c2.255102 0 4.0816327 1.82653061 4.0816327 4.08163265s-1.8265307 4.08163266-4.0816327 4.08163266zm0-6.12244898c-1.122449 0-2.04081632.91836734-2.04081632 2.04081632s.91836732 2.04081633 2.04081632 2.04081633 2.0408163-.91836735 2.0408163-2.04081633-.9183673-2.04081632-2.0408163-2.04081632zm4.7142857 17.95918367c-2.255102 0-4.0816326-1.8265306-4.0816326-4.0816327 0-2.255102 1.8265306-4.0816326 4.0816326-4.0816326 2.2551021 0 4.0816327 1.8265306 4.0816327 4.0816326 0 2.2551021-1.8265306 4.0816327-4.0816327 4.0816327zm0-6.122449c-1.122449 0-2.0408163.9183674-2.0408163 2.0408163 0 1.122449.9183673 2.0408164 2.0408163 2.0408164s2.0408163-.9183674 2.0408163-2.0408164c0-1.1224489-.9183673-2.0408163-2.0408163-2.0408163z" fill="#000"></path>
                                    </svg>
                                     }
                                    </div>
                                    <div className="solu_title">
                                    <h3>{el.title}</h3>
                                    </div>
                                    <div className="solu_description">
                                    <p>{el.description}</p>
                                    <button type="button" className="read_more_btn">Read More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>                    
                    )}
                </Row>
            </Container>
        </div>
    )
    
    }
    
    export default MissionVission;