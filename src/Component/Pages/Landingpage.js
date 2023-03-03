import React from "react";
import Footer from "./Footer";
import "./Landingpage.css";
import Banner from "./Banner";
import Exchanges from "./Exchanges";
import Digitalassets from "./Digitalassets";
import Privacy from "./Privacy";
import Disclaimer from "./Disclaimer";

const Landingpage = () => {
  return (
    <React.Fragment>
      <Banner />
      <Exchanges />
      <Digitalassets />
      <Privacy />
      <Disclaimer />
      <Footer />
    </React.Fragment>
  );
};

export default Landingpage;
