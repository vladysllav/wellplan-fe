import { Link } from "react-router-dom";
import React from "react";


interface ThirdSectionProps {
    imageSrc: string;
    title: string;
    description: string;
}

const ThirdSection: React.FC<ThirdSectionProps> =
    ({imageSrc, title, description}) => {
    return (
        <section className="flex items-center py-20 xl:h-screen font-poppins dark:bg-gray-800 bg-violet-100">
            <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-6 md:px-6">
                <div className="relative max-w-xl mx-auto">
                    <img
                        src={imageSrc}
                        alt="medical"
                        className="relative z-20 object-cover w-full rounded-2xl h-96"
                    />
                    <div className="absolute top-0 left-0 items-center justify-center hidden -ml-16 -mt-14 lg:inline-flex"></div>
                    <div className="bottom-0 z-40 mt-10 -mb-20 lg:absolute lg:right-0 lg:-mr-44 lg:mt-0">
                        <div className="w-full p-8 border shadow-sm dark:border-gray-700 bg-gray-50 dark:bg-gray-700 lg:w-96 rounded-2xl">
                            <h2 className="mb-4 text-4xl font-semibold text-blue-500 dark:text-gray-300">{title}</h2>
                            <p className="pb-4 mb-4 text-gray-600 dark:text-gray-400">{description}</p>
                            <Link className="about_link" to={"/"}>
                                Learn more
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ThirdSection;

