import { Fragment } from "react";
import logo from "../../asset/images/logo.svg";
import "./nav.css";

function Nav() {
  return (
    <Fragment>
      <nav className="nav navbar navbar-expand-lg navbar-light bg-light bg-light-rou">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="ROU Tech" className="logo" />
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
              <a className="nav-link" href="/programs">
                Programs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/blog">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/volunteer">
                Volunteer
              </a>
            </li>
          </ul>
          <button className="btn btn-rou" type="click">
            <a className="btn-rou-a btn-rou" href="/Join">
              Join Rou Tech
            </a>
          </button>
        </div>
      </nav>
    </Fragment>
  );
}

export default Nav;
