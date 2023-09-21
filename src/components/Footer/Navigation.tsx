const Navigation = () => {
  return (
    <div className="flex min-h-full flex-col justify-center">
      <div className="sm:mx-auto">
        <ul id="footer-nav" className="text-white">
          <h1 className="font-bold text-lg">Navigation</h1>
          <li className="mt-2">
            <a
              href="/home"
              className="text-white hover:text-indigo-600 hover:underline"
            >
              Homepage
            </a>
          </li>
          <li className="mt-2">
            <a
              href="/aboutUs"
              className="text-white hover:text-indigo-600 hover:underline"
            >
              About Us
            </a>
          </li>
          <li className="mt-2">
            <a
              href="/profile"
              className="text-white hover:text-indigo-600 hover:underline"
            >
              Profile
            </a>
          </li>
          <li className="mt-2">
            <a
              href="/services"
              className="text-white hover:text-indigo-600 hover:underline"
            >
              Services
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
