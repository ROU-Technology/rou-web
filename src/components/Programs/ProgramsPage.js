import React from "react";
import "./ProgramsPage.css";
import Construction from "../common/Construction";
import img from "../../asset/images/under_construction.svg";

function ProgramsPage() {
  let word = `This page is under reconstruction, we are sorry for any inconveniency this might have cause.
   This page wil be available shortly .`;
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

export default ProgramsPage;
