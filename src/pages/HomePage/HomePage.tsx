import DoctorCardList from "../../components/DoctorCardList/DoctorCardList";
import Footer from "../../pages/Footer/Footer";
import Header from "../../pages/Header/Header";

const HomePage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <Header />
        <section className="md:p-10 p-5 bg-violet-100">
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
