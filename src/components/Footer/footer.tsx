import { Link } from "react-router-dom";
import logo from "./logo.png";
import inst from "./instagram.svg";
import fb from "./facebook.svg";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-menu">
      <div className="footer-logo">
        <img src={logo} alt="Healthcare logo" width="300" height="150"></img>
      </div>
      <ul id="footer-nav">
        <h1 className="footer-header">Navigation</h1>
        <li className="footer-nav-item">
          <a href="/home">Homepage</a>
        </li>
        <li className="footer-nav-item">
          <a href="/aboutUs">About us</a>
        </li>
        <li className="footer-nav-item">
          <a href="/profile">Profile</a>
        </li>
        <li className="footer-nav-item">
          <a href="/services">Services</a>
        </li>
      </ul>

      <ul id="footer-rules">
        <h1 className="footer-header">Rules</h1>
        <li className="footer-nav-item">
          <a href="/privacyPolicy">Privacy policy</a>
        </li>
        <li className="footer-nav-item">
          <a href="/terms">Terms of service</a>
        </li>
      </ul>
      <ul id="footer-links">
        <h1 className="footer-header">Contacts</h1>
        <li className="footer-link-item">(123)-456-789</li>
        <a
          href="mailto: info@healthcare.com"
          target="_blank"
          rel="noreferrer"
          style={{ color: "white" }}
        >
          info@healthcare.com
        </a>
        <li className="footer-link-item">
          <Link to="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <div className="footer-icon">
              <img src={fb} alt="Facebook logo" width="25" height="25" />
            </div>
            Facebook
          </Link>
        </li>

        <li className="footer-link-item">
          <Link
            to="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="footer-icon">
              <img src={inst} alt="Instagram logo" width="25" height="25" />
            </div>
            Instagram
          </Link>
        </li>
      </ul>
      <p>© 2023 Healthcare. All rights reserved.</p>
    </div>
  );
};

export default Footer;
