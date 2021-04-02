import React, { Fragment } from "react";
import "./Footer.css";

function Footer() {
  return (
    <Fragment>
      <footer className="footer container-fluid">
        <div className="col">
          <div className="col-one row">
            <div className="col-one-one col-md-6">
              <ul className="row">
                <li className="terms">Terms and Conditions</li>
                <li className="privacy">Privacy policy</li>
              </ul>
            </div>
            <div className="col-one-two col-md-6">
              <i className="fab fa-facebook facebook"></i>
              <i className="fab fa-message facebook"></i>
              <i className="fas fa-phone facebook"></i>
              <i className="fab fa-linkedin facebook"></i>
              <i className="fab fa-twitter facebook"></i>
              <i className="fab fa-instagram facebook"></i>
              <i className="fab fa-youtube facebook"></i>
              <i className="fab fa-whatsapp facebook"></i>
            </div>
          </div>
          <div className="col-two">
            <p className="cp">
              {" "}
              &copy; {new Date().getFullYear()} ROU TECH. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

export default Footer;
