import React, { Fragment } from "react";
import "./Footer.css";
import call from "../../asset/call.svg";
import facebook from "../../asset/facebook.svg";
import twitter from "../../asset/twitter.svg";
import instagram from "../../asset/instagram.svg";
import youtube from "../../asset/youtube.svg";
import mail from "../../asset/mail.svg";
import whatsApp from "../../asset/whatsapp.svg";
import linkedIn from "../../asset/linkedin.svg";

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
              <img src={mail} alt="" className="facebook" />
              <img src={call} alt="" className="facebook" />
              <img src={linkedIn} alt="" className="facebook" />
              <img src={twitter} alt="" className="facebook" />
              <img src={facebook} alt="" className="facebook" />
              <img src={instagram} alt="" className="facebook" />
              <img src={youtube} alt="" className="facebook" />
              <img src={whatsApp} alt="" className="facebook" />
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
