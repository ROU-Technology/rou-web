import { React, useState } from "react";
import "./Courses.css";
import line from "../../../asset/images/line.svg";
import curri_4 from "../../../asset/images/curri-4.jpg";
import curri_3 from "../../../asset/images/curri-3.jpg";
import curri_2 from "../../../asset/images/curri-2.jpg";

function Courses() {
  const [Curri, setCurri] = useState(true);
  const [Caro, setCaro] = useState(true);

  let style2 = {};
  let style3 = {};
  let style4 = {};
  let style5 = {};
  let style6 = {};
  if (Curri === true) {
    style5 = {
      display: "none",
    };
    style6 = {
      display: "none",
    };
    style2 = {
      display: "block",
    };
    style4 = {
      display: "flex",
    };
  } else {
    style3 = {
      display: "block",
    };
    style4 = {
      display: "none",
    };
  }

  if (Caro === true && Curri === false) {
    setTimeout(() => {
      setCaro(!Caro);
    }, 5000);
    style5 = {
      display: "none",
    };
    style6 = {
      display: "flex",
    };
  } else if (Caro === false && Curri === false) {
    setTimeout(() => {
      setCaro(!Caro);
    }, 5000);
    style5 = {
      display: "flex",
    };
    style6 = {
      display: "none",
    };
  }

  const setTrue = () => {
    setCurri(true);
  };

  const setFalse = () => {
    setCurri(false);
  };

  return (
    <div className="courses">
      <h1>Courses</h1>
      <div className="row curri">
        <div className="curri-2 col-sm-6">
          <p className="curri-btn" onClick={setTrue}>
            Jetsetters Curriculum
          </p>
          <p className="curri-btn-sm" onClick={setTrue}>
            Jetsetters
          </p>
          <img src={line} style={style2} className="rule" alt="line"></img>
        </div>
        <div className="curri-3 col-sm-6">
          <p className="curri-btn col-sm-6" onClick={setFalse}>
            Loner wolf Curriculum
          </p>
          <p className="curri-btn-sm-2 col-sm-6" onClick={setFalse}>
            Loner wolf
          </p>
          <img src={line} style={style3} className="rule-2" alt="line"></img>
        </div>
      </div>
      <div style={style4} className="jet row">
        <img src={curri_4} alt="curri-4" className="curri_4 col-md-6" />
        <div className="curriW col-md-6">
          <p className="curri_word">
            This is a curriculum that targets primary and high school learners
            that support team learning, design thinking and challenges students
            to build real life solutions.
          </p>
          <button className="btn curri_btn_join">
            <a href="/join">Join ROU Tech</a>
          </button>
        </div>
      </div>
      <div style={style5} className="jet row">
        <img src={curri_3} alt="curri-4" className="curri_4 col-md-6" />
        <div className="curriW col-md-6">
          <p className="curri_word">
            Understand the basics to expertise , get to learn the ins and outs
            of the programming world and why Artificial Intelligence is the
            future.
          </p>
          <button className="btn curri_btn_join">
            <a href="/join">Join ROU Tech</a>
          </button>
        </div>
      </div>
      <div style={style6} className="jet row">
        <img src={curri_2} alt="curri-4" className="curri_4 col-md-6" />
        <div className="curriW col-md-6">
          <p className="curri_word">
            This is a curriculum that targets self learners and intensifies
            learning rapidly so that within 3 to 9 months , you will be ready to
            venture into the market.
          </p>
          <button className="btn curri_btn_join">
            <a href="/join">Join ROU Tech</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Courses;
