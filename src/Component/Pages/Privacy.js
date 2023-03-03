import React, { useEffect } from 'react'
import { Container, Row } from "react-bootstrap";
import "./Landingpage.css";
import { RiSecurePaymentFill } from "react-icons/ri";
import { BiSelectMultiple } from "react-icons/bi";
import { RxLapTimer } from "react-icons/rx";
import AOS from "aos"
import 'aos/dist/aos.css'


const Privacy = () => {
  useEffect(()=>{
    AOS.init({duration:1000});
  }, []);
  
  return (
    <section className="privacy-section">
    <Container>
      <Row>
        <div className="privacy col-md-12"data-aos="fade-right">
          <h3>We Care Your Privacy</h3>
          <p>Security is the top most priority</p>
        </div>
        <div className="privacy-cards d-flex "data-aos="fade-up">
          <div className="card col-4">
            <h2>
              <RiSecurePaymentFill />
            </h2>
            <h4>Private & Secure</h4>
            <p>
              Only you can access your wallet. We don’t collect any personal
              data.
            </p>
          </div>
          <div className="card col-4">
            <h2>
              <RxLapTimer />
            </h2>
            <h4>Really quick</h4>
            <p>
              Only you can access your wallet. We don’t collect any personal
              data.
            </p>
          </div>
          <div className="card col-4">
            <h2>
              <BiSelectMultiple />
            </h2>
            <h4>Multi Tasking</h4>
            <p>
              Only you can access your wallet. We don’t collect any personal
              data.
            </p>
          </div>
        </div>
      </Row>
    </Container>
  </section>

  )
}

export default Privacy