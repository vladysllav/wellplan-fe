import logo from '../../assets/images/logo.png';
import Navigation from '../../components/Footer/Navigation';
import Policies from '../../components/Footer/Policies';
import Links from '../../components/Footer/Links';

const Footer = () => {
    return (
        <div className="footer-menu bg-indigo-900 text-white py-4 flex flex-wrap justify-center lg:justify-between">
            <div className="lg:w-1/4 w-full">
                <img
                    src={logo}
                    alt="Healthcare logo"
                    className="mx-auto"
                    style={{ maxWidth: '300px', height: 'auto' }}
                />
            </div>
            <div className="lg:w-1/4 w-full lg:text-left text-center">
                <Navigation />
            </div>
            <div className="lg:w-1/4 w-full lg:text-left text-center">
                <Policies />
            </div>
            <div className="lg:w-1/4 w-full lg:text-left text-center">
                <Links />
            </div>
            <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white">
                © 2023 Healthcare. All rights reserved.
            </p>
        </div>
    );
};

export default Footer;
