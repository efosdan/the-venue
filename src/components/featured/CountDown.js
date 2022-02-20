import React, { Component } from "react";
import Slide from "react-reveal/Slide";

class CountDown extends Component {
  state = {
    deadline: "Feb, 20, 2025",
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0",
  };

  getCountDown(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      alert("Date has passed");
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));

      this.setState({
        days,
        hours,
        minutes,
        seconds,
      });
    }
  }

  componentDidMount() {
    setInterval(() => this.getCountDown(this.state.deadline), 1000);
  }

  render() {
    return (
      <Slide left delay={500}>
        <div className="countdown_wrapper">
          <div className="countdown_top">Events starts in</div>

          <div className="countdown_bottom">
            <div className="countdown_item">
              <div className="countdown_time">{this.state.days}</div>
              <div className="countdown_tag">Days</div>
            </div>

            <div className="countdown_item">
              <div className="countdown_time">{this.state.hours}</div>
              <div className="countdown_tag">Hrs</div>
            </div>

            <div className="countdown_item">
              <div className="countdown_time">{this.state.minutes}</div>
              <div className="countdown_tag">Mins</div>
            </div>

            <div className="countdown_item">
              <div className="countdown_time">{this.state.seconds}</div>
              <div className="countdown_tag">Sec</div>
            </div>
          </div>
        </div>
      </Slide>
    );
  }
}

export default CountDown;
