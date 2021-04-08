import { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../../asset/images/logo.svg";
import "./Nav.css";

function Nav() {
  return (
    <Fragment>
      <nav className="nav navbar navbar-expand-lg navbar-light bg-light bg-light-rou">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="ROU Tech" className="logo" />
        </Link>
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
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/programs">
                Programs
              </Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/blog">
                Blog
              </a>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/volunteer">
                Volunteer
              </Link>
            </li>
          </ul>
          <button className="btn btn-rou" type="click">
            <Link className="btn-rou-a btn-rou" to="/Join">
              Join Rou Tech
            </Link>
          </button>
        </div>
      </nav>
    </Fragment>
  );
}

export default Nav;
