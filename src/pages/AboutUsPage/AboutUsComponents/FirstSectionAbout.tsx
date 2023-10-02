import React from 'react';
import {Link} from "react-router-dom";



interface SectionContentProps {
    title: string;
    description: string;
}

const FirstSectionAbout: React.FC<SectionContentProps & { imageUrl: string }> =
    ({imageUrl, title, description,}) => {
        return (
            <section className="flex items-center xl:h-screen font-poppins bg-violet-100">
                <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
                    <div className="flex flex-wrap">
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                            <img
                                src={imageUrl}
                                alt="medical_team"
                                className="relative z-40 object-cover w-full h-96 rounded-3xl"
                            />
                        </div>
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                            <h2 className="mb-4 text-4xl font-semibold text-blue-500 dark:text-gray-300">
                                {title}
                            </h2>
                            <p className="mb-10 text-base leading-7 text-gray-500 dark:text-gray-400 text-left">
                                {description}
                            </p>
                            <Link className="about_link"
                                  to="/">Discover more</Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    };

export default FirstSectionAbout;