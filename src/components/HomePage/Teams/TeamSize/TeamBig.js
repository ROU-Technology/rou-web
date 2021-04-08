import React from "react";

function TeamBig(props) {
  return (
    <div id="team">
      <h1 className="join-h1">Core Team</h1>
      <div className="team-b" style={props.first}>
        <div className="next">
          <img
            className="next"
            src={props.Next}
            alt="next"
            onClick={props.changeMove}
          />
        </div>
        <div className="core-team-member t-one">
          <img src={props.Ola} alt="founder" className="img-core-team" />
          <h2 className="names">Raheem Olalekan .U</h2>
          <p className="position">CEO, Founder and Lead Developer</p>
          <div className="links">
            <i className="fab fa-linkedin icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-github icon"></i>
          </div>
        </div>
        <div className="core-team-member t-two">
          <img src={props.Tiff} alt="core-team" className="img-core-team" />
          <h2 className="names t-two-p">Tiffany Kisiero</h2>
          <p className="position t-two-p">
            Lead Designer <br />
            Developer
          </p>
          <div className="links">
            <i className="fab fa-linkedin icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-instagram icon"></i>
          </div>
        </div>
        <div className="core-team-member t-three">
          <img src={props.Deji} alt="core-team" className="img-core-team" />
          <h2 className="names t-three-p">Oluwole Ayodeji .I</h2>
          <p className="position t-three-p">Advisor and Curriculum Developer</p>
          <div className="links">
            <i className="fab fa-linkedin icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-instagram icon"></i>
          </div>
        </div>
        <div className="next">
          <img
            className="next"
            src={props.Back}
            alt="next"
            onClick={props.changeMove}
          />
        </div>
      </div>
      <div className="team-b" style={props.second}>
        <div className="next">
          <img
            className="next"
            src={props.Next}
            alt="next"
            onClick={props.changeMove}
          />
        </div>
        <div className="core-team-member t-one">
          <img src={props.Ola} alt="founder" className="img-core-team" />
          <h2 className="names">Raheem Olalekan .U</h2>
          <p className="position">CEO, Founder and Lead Developer</p>
          <div className="links">
            <i className="fab fa-linkedin icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-github icon"></i>
          </div>
        </div>
        <div className="core-team-member t-two">
          <img src={props.Tiff} alt="core-team" className="img-core-team" />
          <h2 className="names t-two-p">Fayanju Omobobola</h2>
          <p className="position t-two-p">
            Lead Designer <br />
            Developer
          </p>
          <div className="links">
            <i className="fab fa-linkedin icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-github icon"></i>
          </div>
        </div>
        <div className="core-team-member t-three">
          <img src={props.Deji} alt="core-team" className="img-core-team" />
          <h2 className="names t-three-p">Oluwole Ayodeji .I</h2>
          <p className="position t-three-p">Advisor and Curriculum Developer</p>
          <div className="links">
            <i className="fab fa-linkedin icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-github icon"></i>
          </div>
        </div>
        <div className="next">
          <img
            className="next"
            src={props.Back}
            alt="next"
            onClick={props.changeMove}
          />
        </div>
      </div>
    </div>
  );
}

export default TeamBig;
