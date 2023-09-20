import logo from "src/assets/images/logo.png";

import "src/pages/Footer/Footer.css";
import Navigation from "../../components/Footer/Navigation";
import Policies from "../../components/Footer/Policies";
import Links from "../../components/Footer/Links";


const Footer = () => {
  return (
    <div className="footer-menu">
      <div className="footer-logo">
        <img src={logo} alt="Healthcare logo" width="300" height="150"></img>
      </div>
      <Navigation />
      <Policies />
      <Links />
      <p>© 2023 Healthcare. All rights reserved.</p>
    </div>
  );
};

export default Footer;
