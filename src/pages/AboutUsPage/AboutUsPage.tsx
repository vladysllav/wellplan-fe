import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import medical_team from "../../assets/images/about_us/medical_team.jpg"
import our_goal from "../../assets/images/about_us/our_goal.png"
import our_mission from "../../assets/images/about_us/our_mission.png"
import table from "../../assets/images/about_us/table.jpg"
import ServiceAboutUs from "./ServiceAboutUs";
import TeamAboutUs from "./TeamAboutUs";
import ReviewsAboutUs from "./ReviewsAboutUs";



const AboutUsPage: React.FC = () => {
    return (
        <>
            <div className="bg-gray-100 min-h-screen">
                <Header/>
                <section className="flex items-center xl:h-screen font-poppins bg-violet-100">
                    <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
                        <div className="flex flex-wrap">
                            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                                <img
                                    src={medical_team}
                                    alt="medical_team"
                                    className="relative z-40 object-cover w-full h-96 rounded-3xl"
                                />
                            </div>
                            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                                <h2 className="mb-4 text-4xl font-semibold text-blue-500 dark:text-gray-300">
                                    About Us
                                </h2>
                                <p className="mb-10 text-base leading-7 text-gray-500 dark:text-gray-400 text-left">
                                    This is an online service that gives people the opportunity to receive consultations
                                    from qualified medical professionals, regardless of where the doctor and patient are
                                    currently located in the world. Is a technical intermediary between a patient and a
                                    licensed physician. All doctors who provide consultations on our platform can,
                                    if they wish, do it for free in their free time on a volunteer basis. Before
                                    starting work on the platform, all doctors provide information about their valid
                                    licenses, diplomas, and certificates.
                                </p>
                                <a href="#" className="px-4 py-3 text-blue-700 transition-all transform border
                                border-blue-500 rounded-3xl hover:bg-blue-600 dark:border-blue-400
                                dark:hover:bg-blue-500 dark:hover:text-gray-100 dark:hover:border-blue-500
                                dark:text-blue-400 hover:text-gray-100">
                                    Discover more
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="flex items-center xl:h-screen font-poppins bg-violet-100">
                    <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
                        <div className="flex flex-wrap items-center">
                            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                                <div className="lg:max-w-md">
                                    <h2 className="mb-4 text-4xl font-semibold text-blue-500 dark:text-gray-300">
                                        Mission and Values
                                    </h2>
                                    <p className="mb-10 text-base leading-7 text-gray-500 dark:text-gray-400 text-left">
                                        Human life and health are one of the greatest values in any civilized society,
                                        and the provision of medical care is one of the most important tasks of the
                                        state health care system. Telemedicine, as a modern and promising field of
                                        medical services in the future, is designed to significantly facilitate
                                        citizens' access to doctors in conditions where personal visits to health care
                                        facilities are significantly complicated or impossible at all.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                                <div className="flex mb-4">
                                    <img src={our_goal} alt="logo" className="w-16 h-16"/>
                                    <div>
                                        <h2 className="mb-4 text-xl font-bold leading-tight dark:text-gray-300 md:text-2xl">
                                            Our goal
                                        </h2>
                                        <p className="mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                                            Providing citizens of Ukraine, including those who are temporarily abroad,
                                            with high-quality remote access to medical specialists using various
                                            communication channels: in chat, by phone or during a video conference.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex mb-4">
                                    <img src={our_mission} alt="logo" className="w-16 h-16"/>
                                    <div>
                                        <h2 className="mb-4 text-xl font-bold leading-tight dark:text-gray-300 md:text-2xl">
                                            Our mission
                                        </h2>
                                        <p className="mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                                            To help each of our citizens to get a professional doctor's consultation,
                                            which gives an opportunity to save health, and in some cases, life.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="flex items-center py-20 xl:h-screen font-poppins dark:bg-gray-800 bg-violet-100">
                    <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-6 md:px-6">
                        <div className="relative max-w-xl mx-auto">
                            <img
                                src={table}
                                alt="medical"
                                className="relative z-20 object-cover w-full rounded-2xl h-96"
                            />
                            <div
                                className="absolute top-0 left-0 items-center justify-center hidden -ml-16 -mt-14 lg:inline-flex">
                            </div>
                            <div className="bottom-0 z-40 mt-10 -mb-20 lg:absolute lg:right-0 lg:-mr-44 lg:mt-0 ">
                                <div
                                    className="w-full p-8 border shadow-sm dark:border-gray-700 bg-gray-50 dark:bg-gray-700 lg:w-96 rounded-2xl">
                                    <h2 className="mb-4 text-4xl font-bold text-gray-600 dark:text-gray-300">
                                        Principles
                                    </h2>
                                    <p className="pb-4 mb-4 text-gray-600 dark:text-gray-400 ">
                                        We call on doctors to provide as many free medical consultations as possible to
                                        the population, as this, in our opinion, is currently a socially responsible
                                        task of state importance.
                                    </p>
                                    <a
                                        href="#"
                                        className="px-4 py-3 text-sm text-gray-100 transition-all transform bg-blue-600
                                        rounded-2xl hover:bg-blue-500 dark:hover:bg-blue-500 dark:hover:text-gray-50
                                        dark:text-gray-100 hover:text-gray-100"
                                    >
                                        Learn more
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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
