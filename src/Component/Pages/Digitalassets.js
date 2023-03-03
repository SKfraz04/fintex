import React, { useEffect } from 'react'
import { Container, Row } from "react-bootstrap";
import "./Landingpage.css";
import AOS from "aos"
import 'aos/dist/aos.css'

const Digitalassets = () => {
  useEffect(()=>{
    AOS.init({duration:1000});
  }, []);

  return (
    <section className="digtal-assets">
    <Container>
      <Row>
        <div className="digital-asset col-md-3"data-aos="fade-up">
          <img
            src="./image/digital_assets.png"
            alt="iphone14"
            className="img-fluid"
          />
        </div>
        <div className="digital-asset-content col-md-9 my-auto"data-aos="fade-left">
          <h3>Your digital assets in one place</h3>
          <p>Track charts and prices within the app. </p>
          <p>Store and manage your collectibles, Art & NFT</p>
        </div>
      </Row>
    </Container>
  </section>

  )
}

export default Digitalassets