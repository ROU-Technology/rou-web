import React from "react";
import img from "../../asset/images/404.svg";
import Construction from "./Construction";

function Page404() {
  let head = "404 error";
  let word =
    "So sorry you didn’t find what you were looking for, it looks like the developers are taking their sweet time on this page.";
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

export default Page404;
