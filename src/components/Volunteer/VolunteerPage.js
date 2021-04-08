import React, { Component } from "react";
import "./VolunteerPage.css";
import Construction from "../common/Construction";
import img from "../../asset/images/under_construction.svg";

export default class VolunteerPage extends Component {
  render() {
    let word = `This page is under reconstruction, we are sorry for any inconveniency this might have cause.
  ${(<br />)} this page wil be available shortly .`;
    let head = "Under Construction";
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
