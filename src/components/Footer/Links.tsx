import "src/pages/Footer/Footer.css";
import { Link } from "react-router-dom";
import inst from "src/assets/images/instagram.svg";
import fb from "src/assets/images/facebook.svg";

const Links = () => {
    return (

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
    )
    };

    export default Links;
    