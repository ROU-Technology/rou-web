import React, { Component } from "react";
import "./About.css";

export default class AboutPage extends Component {
  render() {
    return (
      <div className="container-fluid jumbotron">
        <h1 className="ab-h1">About</h1>
        <p>
          We are a company, working together to help Youths make their dreams
          come true by imparting futuristic skills. We started ROU Tech, to
          eliminate the barrier between you and your dreams. We wished we could
          have known about Programming and Artificial Intelligence much earlier,
          and gotten the skills at a much cheaper price, but how blessed and
          fortunate we are to now partner with gurus in the Tech field, to make
          this wish come true.
        </p>
      </div>
    );
  }
}
