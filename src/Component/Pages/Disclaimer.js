import React, { useEffect } from 'react'
import { Container, Row } from "react-bootstrap";
import "./Landingpage.css";
import AOS from "aos"
import 'aos/dist/aos.css'

const Disclaimer = () => {
  useEffect(()=>{
    AOS.init({duration:1000});
  }, []);

  return (
    <section className="disclaimer-section">
    <Container>
      <Row>
        <div className="disclaimer col-md-6"data-aos="fade-right">
          <h6>Disclaimer</h6>
          <p>
            Fintex is a non-custodial cryptocurrency wallet. You have sole
            control over your funds and are responsible for ensuring your
            secret recovery phrase is stored safely. It is impossible to
            recover funds or access your wallet without your secret recovery
            phrase. Likewise, if the secret recovery phrase is stolen and
            funds are transferred out of the wallet, it may be impossible to
            return them.
          </p>
          <p>
            Cryptocurrencies fluctuate wildly in value. Fintex App displays
            current prices in a chosen currency for convenience, which does
            not imply that any token can actually be exchanged for the given
            amount.
          </p>
          <p>
            Fintex does not provide investment advice, does not process
            payments, and does not have access to your funds. The
            application is offered as-is without warranty of any kind.
          </p>
        </div>
        <div className="disclaimer-app col-md-6 my-auto">
          <h2>Get Fintex App Now</h2>
          <div className="app-store d-flex">
            <img src="../image/googleplay.png" alt="play store" data-aos="flip-down" />
            <img
              src="./image/appstore.png"
              alt="playBiSelectMultiple store"
              data-aos="flip-down"
              data-aos-delay="300"
            />
          </div>
        </div>
      </Row>
    </Container>
  </section>

  )
}

export default Disclaimer