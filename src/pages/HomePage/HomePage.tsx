import DoctorCardList from '../../components/DoctorCardList/DoctorCardList';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
    return (
        <>
            <div className="bg-gray-100 min-h-screen">
                <Header />
                <section className="md:p-10 p-5 bg-violet-100">
                    <div className="flex justify-end p-1">
                        <Link to="/add-doctor" className="text-indigo-500 hover:underline">
                            Add doctor
                        </Link>
                    </div>
                    <div>
                        <DoctorCardList />
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default HomePage;
