import { React, useState } from "react";
import "./Team.css";
import Tiff from "../../../asset/images/Tiffany.png";
import Deji from "../../../asset/images/Deji.png";
import Ola from "../../../asset/images/ola.png";
import Next from "../../../asset/images/Group 110.svg";
import Back from "../../../asset/images/Group 111.svg";
import TeamBig from "./TeamSize/TeamBig";
import TeamSmall from "./TeamSize/TeamSmall";

function Team() {
  const [Move, setMove] = useState("first");

  let first = {};
  let second = {};

  if (Move === "first") {
    first = {
      display: "flex",
    };
    second = {
      display: "none",
    };
    setTimeout(() => {
      setMove("second");
    }, 2000);
  } else {
    first = {
      display: "none",
    };
    second = {
      display: "flex",
    };
    setTimeout(() => {
      setMove("first");
    }, 2000);
  }

  const changeMove = () => {
    if (Move === "first") {
      setMove("second");
    } else {
      setMove("first");
    }
  };

  const display = () => {
    if (window.screen.width < 550) {
      return (
        <TeamSmall
          first={first}
          Next={Next}
          Tiff={Tiff}
          Deji={Deji}
          Ola={Ola}
          changeMove={changeMove}
          Back={Back}
          second={second}
        />
      );
    } else {
      return (
        <TeamBig
          first={first}
          Next={Next}
          Tiff={Tiff}
          Deji={Deji}
          Ola={Ola}
          changeMove={changeMove}
          Back={Back}
          second={second}
        />
      );
    }
  };

  return <>{display()}</>;
}

export default Team;
