import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import medical_team from "../../assets/images/about_us/medical_team.jpg"
import our_goal from "../../assets/images/about_us/our_goal.png"
import our_mission from "../../assets/images/about_us/our_mission.png"
import table from "../../assets/images/about_us/table.jpg"
import ServiceAboutUs from "./AboutUsComponents/ServiceAboutUs";
import TeamAboutUs from "./AboutUsComponents/TeamAboutUs";
import ReviewsAboutUs from "./AboutUsComponents/ReviewsAboutUs";
import FirstSectionAbout from "./AboutUsComponents/FirstSectionAbout";
import SecondSection from "./AboutUsComponents/SecondSection";
import ThirdSection from "./AboutUsComponents/ThirdSection";


const AboutUsPage = () => {
    return (
        <>
            <div className="bg-gray-100 min-h-screen">
                <Header/>
                <FirstSectionAbout
                    imageUrl={medical_team}
                    title="About Us"
                    description="This is an online service that gives people the opportunity to receive consultations
                    from qualified medical professionals, regardless of where the doctor and patient are currently
                    located in the world. Is a technical intermediary between a patient and a licensed physician.
                    All doctors who provide consultations on our platform can, if they wish, do it for free in their
                    free time on a volunteer basis. Before starting work on the platform, all doctors provide
                    information about their valid licenses, diplomas, and certificates."
                />
                <SecondSection ourGoalImage={our_goal} ourMissionImage={our_mission}/>
                <ThirdSection imageSrc={table}
                              title="Principles"
                              description=" We call on doctors to provide as many free medical consultations as possible
                               to the population, as this, in our opinion, is currently a socially responsible task of
                               state importance."
                               linkTo="/"/>
                <ServiceAboutUs/>
                <div className="bg-violet-100">
                    <TeamAboutUs/>
                    <ReviewsAboutUs/>
                </div>
                <Footer/>
            </div>
        </>
    );
};

export default AboutUsPage;
