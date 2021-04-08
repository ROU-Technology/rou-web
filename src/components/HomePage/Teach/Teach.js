import { React, useState } from "react";
import line from "../../../asset/images/line.svg";
import "./Teach.css";

function Teach() {
  const [level, setlevel] = useState("beginner");

  const levelOne = () => {
    console.log("level-one");
    if (level !== "beginner") {
      setlevel("beginner");
    }
  };

  const levelTwo = () => {
    console.log("level-two");
    if (level !== "intermediate") {
      setlevel("intermediate");
    }
  };
  const levelThree = () => {
    console.log("level-three");
    if (level !== "expert") {
      setlevel("expert");
    }
  };

  return (
    <div className="teach">
      <h1 className="teach-h">What we Teach....</h1>
      <div className="level">
        <div className="level-one" onClick={levelOne}>
          <p className="level-one-p">Beginner</p>
          <img src={line} className="line" alt="line" />
        </div>
        <div className="level-two" onClick={levelTwo}>
          <p className="level-two-p">Beginner</p>
          <img src={line} className="line" alt="line" />
        </div>
        <div className="level-three" onClick={levelThree}>
          <p className="level-three-p">Beginner</p>
          <img src={line} className="line" alt="line" />
        </div>
      </div>
    </div>
  );
}

export default Teach;
