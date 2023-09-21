import { Link } from "react-router-dom";
import inst from "../../assets/images/instagram.svg";
import fb from "../../assets/images/facebook.svg";

const Links = () => {
  return (
    <div className="flex min-h-full flex-col justify-center">
      <div className="sm:mx-auto">
        <ul id="footer-links" className="text-white">
          <h1 className="font-bold text-lg">Contacts</h1>
          <li className="mt-2">Phone: (123)-456-789</li>
          <li className="mt-2">
            <a
              href="mailto:info@healthcare.com"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-indigo-600 hover:underline"
            >
              Email: info@healthcare.com
            </a>
          </li>
          <li className="mt-2">
            <Link
              to="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-indigo-600 hover:underline"
            >
              <div className="flex items-center">
                <img
                  src={fb}
                  alt="Facebook logo"
                  className="w-5 h-5 mr-2"
                  style={{ filter: "invert(1)" }}
                />
                Facebook
              </div>
            </Link>
          </li>
          <li className="mt-2">
            <Link
              to="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-indigo-600 hover:underline"
            >
              <div className="flex items-center">
                <img
                  src={inst}
                  alt="Instagram logo"
                  className="w-5 h-5 mr-2"
                  style={{ filter: "invert(1)" }}
                />
                Instagram
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Links;
