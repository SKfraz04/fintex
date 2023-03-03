import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import "./Landingpage.css";
import AOS from "aos"
import 'aos/dist/aos.css'


const Banner = () => {
  useEffect(()=>{
    AOS.init({duration:1000});
  }, []);
  return (
    <section>
        <div className="banner">
          <Container>
            <Row>
              <div className="banner-title col-md-6 my-auto " data-aos="fade-up"data-aos-delay="300">
                <h1>Trusted and Secure Crypto Wallet App</h1>
                <p>
                  Join millions of peoples using decentralised multichain
                  wallet.
                </p>
                <div className="app-store d-flex">
                  <img src="../image/googleplay.png" alt="play store" />
                  <img
                    src="./image/appstore.png"
                    alt="playBiSelectMultiple store"
                  />
                </div>
              </div>
              <div className="col-md-6 banner-img" data-aos="fade-down">
                <img
                  src="./image/Group 8.png"
                  alt="mobile"
                  className="img-fluid"
                />
              </div>
            </Row>
          </Container>
        </div>
    </section>
  );
};

export default Banner;
