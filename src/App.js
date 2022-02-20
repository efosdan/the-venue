import React, { Component } from "react";
import "./resources/styles.css";
import { Element } from "react-scroll";

import Header from "./components/header_footer/Header";
import { blue } from "@mui/material/colors";
import Featured from "./components/featured";
import VenueNFO from "./components/venueNFO";
import Highlights from "./components/highlights";
import Pricing from "./components/pricing";
import Location from "./components/location";
import Footer from "./components/header_footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "700px", background: "#997788" }}>
        <Header />

        <Element name="featured">
          <Featured />
        </Element>

        <Element name="venueNFO">
          <VenueNFO />
        </Element>

        <Element name="highlights">
          <Highlights />
        </Element>

        <Element name="pricing">
          <Pricing />
        </Element>

        <Element name="location">
          <Location />
        </Element>
        <Footer />
      </div>
    );
  }
}

export default App;
