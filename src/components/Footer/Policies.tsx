const Policies = () => {
  return (
    <div className="flex min-h-full flex-col">
      <div className="sm:mx-auto">
        <ul id="footer-policies" className="text-white">
          <h1 className="font-bold text-lg">Policies</h1>
          <li className="mt-2">
            <a
              href="/privacyPolicy"
              className="text-white hover:text-indigo-600 hover:underline"
            >
              Privacy policy
            </a>
          </li>
          <li className="mt-2">
            <a
              href="/terms"
              className="text-white hover:text-indigo-600 hover:underline"
            >
              Terms of service
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Policies;
