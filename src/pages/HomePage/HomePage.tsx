import {Link} from 'react-router-dom';
import DoctorCardList from '../../components/DoctorCardList/DoctorCardList';
import Footer from '../../components/Footer/footer';

const HomePage: React.FC = () => {
    return (
        <>
        <div className="bg-gray-100 min-h-screen">
            <header className="shadow-md p-6 bg-lime-300">

                <div className="branding text-4xl font-extrabold text-center mb-6 text-indigo-500">
                    My App
                </div>

                <div className="text-center text-lg font-light mb-4 text-gray-600">
                    Become better !!!
                </div>

                <nav>
                    <ul className="flex justify-center space-x-6">
                        <li className="transform hover:scale-110 transition duration-200">
                            <Link className="text-lg font-semibold text-green-500 hover:text-orange-500"
                                  to="/">Home</Link>
                        </li>
                        <li className="transform hover:scale-110 transition duration-200">
                            <Link className="text-lg font-semibold text-green-500 hover:text-orange-500"
                                  to="/new">Discover</Link>
                        </li>
                    </ul>
                </nav>

            </header>

            <section className="md:p-10 p-5 bg-violet-100">
                <div>
                    <DoctorCardList/>
                </div>
            </section>
            
        </div>
        <Footer/>
        </>
    );
};

export default HomePage;
