import "src/pages/Footer/Footer.css";

const Navigation = () => {
    return (

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
    )
    };

    export default Navigation;
    