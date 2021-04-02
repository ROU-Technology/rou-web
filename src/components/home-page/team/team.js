import { React, useState } from "react";
import "./team.css";
import Tiff from "../../../asset/images/Tiffany.png";
import Next from "../../../asset/images/Group 110.svg";
import Back from "../../../asset/images/Group 111.svg";

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

  return (
    <div id="team">
      <h1 className="join-h1">Core Team</h1>
      <div className="team-b" style={first}>
        <div className="next">
          <img className="next" src={Next} alt="next" onClick={changeMove} />
        </div>
        <div className="core-team-member">
          <img src={Tiff} alt="founder" className="img-core-team" />
          <h2 className="names">Raheem Olalekan Usman</h2>
          <p className="position">CEO, Founder and Lead Developer</p>
          <div className="links"></div>
        </div>
        <div className="core-team-member t-two">
          <img src={Tiff} alt="core-team" className="img-core-team" />
          <h2 className="names t-two-p">Tiffany Kisiero</h2>
          <p className="position t-two-p">Lead Designer</p>
          <div className="links"></div>
        </div>
        <div className="core-team-member t-three">
          <img src={Tiff} alt="core-team" className="img-core-team" />
          <h2 className="names t-three-p">Raheem Olalekan Usman</h2>
          <p className="position t-three-p">Advisor and Curriculum Developer</p>
          <div className="links"></div>
        </div>
        <div className="next">
          <img className="next" src={Back} alt="next" onClick={changeMove} />
        </div>
      </div>
      <div className="team-b" style={second}>
        <div className="next">
          <img className="next" src={Next} alt="next" onClick={changeMove} />
        </div>
        <div className="core-team-member">
          <img src={Tiff} alt="founder" className="img-core-team" />
          <h2 className="names">Raheem Olalekan</h2>
          <p className="position">CEO, Founder and Lead Developer</p>
          <div className="links"></div>
        </div>
        <div className="core-team-member t-two">
          <img src={Tiff} alt="core-team" className="img-core-team" />
          <h2 className="names t-two-p">Tiffany Kisiero</h2>
          <p className="position t-two-p">Lead Designer</p>
          <div className="links"></div>
        </div>
        <div className="core-team-member t-three">
          <img src={Tiff} alt="core-team" className="img-core-team" />
          <h2 className="names t-three-p">Raheem Olalekan Usman</h2>
          <p className="position t-three-p">Advisor and Curriculum Developer</p>
          <div className="links"></div>
        </div>
        <div className="next">
          <img className="next" src={Back} alt="next" onClick={changeMove} />
        </div>
      </div>
    </div>
  );
}

export default Team;
