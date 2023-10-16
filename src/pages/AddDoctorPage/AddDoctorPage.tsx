import React from 'react';
import Header from '../../components/Header/Header';
import AddDoctorForm from './AddDoctorForm';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

const AddDoctorPage: React.FC = () => {
    return (
        <>
            <Header />
            <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
                <section className="md:p-10 p-5 bg-violet-100 w-full">
                    <div className="md:flex md:justify-center">
                        <div className="md:mr-2 mb-4 md:mb-0">
                            <AddDoctorForm />
                        </div>
                    </div>
                </section>
                <div className="text-center my-6">
                    <Link to="/all-doctors" className="text-indigo-500 hover:underline">
                        View All Doctors
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AddDoctorPage;
