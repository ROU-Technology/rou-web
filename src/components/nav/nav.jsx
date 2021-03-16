import { Fragment } from "react";
// import logo from "../logo.svg";
import "./nav.css";

function Nav() {
  return (
    <Fragment>
      <nav className="nav navbar navbar-expand-lg navbar-light bg-light bg-light-rou">
        <a className="navbar-brand" href="/">
          ROU Tech
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/courses">
                Courses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/volunteer">
                Volunteer
              </a>
            </li>
          </ul>
          <button className="btn btn-rou" type="click">
            Join Rou Tech
          </button>
        </div>
      </nav>
    </Fragment>
  );
}

export default Nav;
