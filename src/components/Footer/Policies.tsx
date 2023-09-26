import { Link } from "react-router-dom";

const Policies = () => {
  return (
    <div className="flex min-h-full flex-col">
      <div className="sm:mx-auto">
        <ul id="footer-policies" className="text-white">
          <h1 className="font-bold text-lg">Policies</h1>
          <li className="mt-2">
            <Link to="/privacyPolicy" className="text-white hover:text-indigo-600 hover:underline">
              Privacy policy
            </Link>
          </li>
          <li className="mt-2">
            <Link to="/Terms" className="text-white hover:text-indigo-600 hover:underline">
              Terms of service
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Policies;
