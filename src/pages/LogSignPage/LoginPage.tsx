import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import AuthorizationForm from './AuthorizationForm/AuthorizationForm';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
    return (
        <>
            <Header />
            <section className="md:p-5 p-5 bg-violet-100 w-full">
                <div className="md:flex md:justify-center">
                    <div className="md:w-1/2 md:mr-2 mb-4 md:mb-0">
                        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto">
                            <AuthorizationForm />
                            <div className="text-center my-6">
                                Not a client yet?{' '}
                                <Link to="/registration" className="text-indigo-500 hover:underline">
                                    Sign up.
                                </Link>
                            </div>{' '}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default LoginPage;
