import React, { useEffect } from "react";
import "./Footer.css";
import { Container, Row } from "react-bootstrap";
import AOS from "aos"
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(()=>{
    AOS.init({duration:1000});
  }, []);

  return (
    <React.Fragment>
      <section className="footer-section">
        <Container>
          <Row className="footer-list">
            <div className="footer-company col-md-3" data-aos="fade-up">
              <h5>Company</h5>
              <ul>
                <li>About us</li>
                <li>What We Do</li>
                <li>Features</li>
              </ul>
            </div>
            <div className="footer-legal col-md-3"data-aos="fade-up" data-aos-delay="300">
              <h5>Legal</h5>
              <ul>
                <li>Privacy Policy</li>
                <li>Terms & Condition</li>
              </ul>
            </div>
            <div className="Subsciber col-md-6" data-aos="fade-up" data-aos-delay="600">
              <h5>Subscribe to Newsletter</h5>
              <div className="Subscibe-input">
                <input type="text" placeholder="Email Id" />
                <button className="ms-3">Subscibe</button>
              </div>
            </div>
          </Row>
        </Container>
            <hr className="footer-hr mt-2"/>
            <h6 className="rights col-md-12 text-center">© 2022 Fintex. All Rights Reserved.</h6>
      </section>
    </React.Fragment>
  );
};

export default Footer;
