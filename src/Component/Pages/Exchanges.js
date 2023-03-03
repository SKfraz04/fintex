import React, { useEffect } from 'react'
import { Container, Row } from "react-bootstrap";
import "./Landingpage.css";
import AOS from "aos"
import 'aos/dist/aos.css'



const Exchanges = () => {
    useEffect(()=>{
      AOS.init({duration:1000});
    }, []);
  
  return (
    <section>
    <div className="backgroung-img">
      <Container>
        <Row>
          <div className="exchange-content col-md-6 my-auto " >
            <h2 data-aos="fade-right"data-aos-delay="300">Send, Receive and Manage your digital assets</h2>
            <h2 data-aos="fade-right" data-aos-delay="500"> Secure andfast</h2>
          </div>
          <div className="exchange-img col-md-6 text-md-end order-md-1 mb-md-0 mb-5"data-aos="fade-left">
            <img
              src="./image/exchange.png"
              alt="exchange"
              className="img-fluid"
            />
          </div>
        </Row>
      </Container>
    </div>
  </section>

  )
}

export default Exchanges