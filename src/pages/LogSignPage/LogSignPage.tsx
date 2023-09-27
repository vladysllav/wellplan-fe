import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import AuthorizationForm from "./AuthorizationForm/AuthorizationForm";
import RegistrationForm from "./RegistrationForm/RegistrationForm";

const LogSignPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
        <section className="md:p-10 p-5 bg-violet-100 w-full">
          <div className="md:flex md:justify-center">
            <div className="md:w-1/2 md:mr-2 mb-4 md:mb-0">
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto">
                <AuthorizationForm />
              </div>
            </div>
            <div className="md:w-1/2 md:ml-2">
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto">
                <RegistrationForm />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default LogSignPage;
