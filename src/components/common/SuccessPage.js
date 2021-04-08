import React, { Component } from "react";
import img from "../../asset/images/success.svg";
import Construction from "./Construction";

export class SuccessPage extends Component {
  render() {
    let word = `Thank you for contacting us at ROU Technology
    ${(<br />)} You will receive a message from us shortly.`;
    let head = "Successful";
    return (
      <Construction
        Img={img}
        Head={head}
        Word={word}
        Link="/"
        Location="Back Home"
      />
    );
  }
}

export default SuccessPage;
