import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import MyButton from "../utilities/Button";

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30,
  };

  porcentage() {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1,
      });
    }
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.porcentage();
    }, 100);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.porcentage()}>
            <div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>

          <Slide right>
            <div className="discount_description">
              <h3>Purchase Ticket before July 30</h3>
              <p>
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>

              <MyButton
                text="Purchase Tickecks"
                bck="#ffa800"
                color="#ffffff"
                link="http://google.com"
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
