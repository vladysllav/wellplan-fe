import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import DoctorCardList from '../../components/DoctorCardList/DoctorCardList';


function AllDoctorsPage() {
  return (
    <>
      <Header />
      <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
        <section className="md:p-10 p-5 bg-violet-100 w-full">
          <div className="md:flex md:justify-center">
            <div className="md:mr-2 mb-4 md:mb-0">
              
            <div>
                        <DoctorCardList />
                    </div> 
              
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default AllDoctorsPage;