import React, { FunctionComponent } from 'react';

interface SecondSectionProps {
    ourGoalImage: string;
    ourMissionImage: string;
}

interface HeadingProps {
    text: string;
    className?: string;
}

interface ParagraphProps {
    text: string;
    className?: string;
}

const SecondSection: FunctionComponent<SecondSectionProps> = ({ourGoalImage, ourMissionImage,}) => {
    const renderHeading = ({ text, className }: HeadingProps) => (
        <h2 className={`mb-4 text-4xl font-semibold ${className}`}>
            {text}
        </h2>
    );

    const renderParagraph = ({ text, className }: ParagraphProps) => (
        <p className={`mb-10 text-base leading-7 ${className}`}>
            {text}
        </p>
    );

    return (
        <section className="flex items-center xl:h-screen font-poppins bg-violet-100">
            <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
                <div className="flex flex-wrap items-center">
                    <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                        <div className="lg:max-w-md">
                            {renderHeading({
                                text: 'Mission and Values',
                                className: 'text-blue-500 dark:text-gray-300',
                            })}
                            {renderParagraph({
                                text:
                                    "Human life and health are one of the greatest values in any civilized society, and " +
                                    "the provision of medical care is one of the most important tasks of the state " +
                                    "health care system. Telemedicine, as a modern and promising field of medical " +
                                    "services in the future, is designed to significantly facilitate citizens' " +
                                    "access to doctors in conditions where personal visits to health care facilities " +
                                    "are significantly complicated or impossible at all.",
                                className: 'text-gray-500 dark:text-gray-400 text-left',
                            })}
                        </div>
                    </div>
                    <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                        <div className="flex mb-4">
                            <img src={ourGoalImage} alt="лого" className="w-16 h-16" />
                            <div>
                                {renderHeading({
                                    text: 'Our goal',
                                    className: 'font-bold leading-tight dark:text-gray-300 md:text-2xl',
                                })}
                                {renderParagraph({
                                    text:
                                        'Providing citizens of Ukraine, including those who are temporarily abroad, ' +
                                        'with high-quality remote access to medical specialists using various ' +
                                        'communication channels: in chat, by phone, or during a video conference.',
                                    className: 'text-gray-500 dark:text-gray-400',
                                })}
                            </div>
                        </div>
                        <div className="flex mb-4">
                            <img src={ourMissionImage} alt="лого" className="w-16 h-16" />
                            <div>
                                {renderHeading({
                                    text: 'Our mission',
                                    className: 'font-bold leading-tight dark:text-gray-300 md:text-2xl',
                                })}
                                {renderParagraph({
                                    text:
                                        "To help each of our citizens to get a professional doctor's consultation, " +
                                        "which gives an opportunity to save health, and in some cases, life.",
                                    className: 'text-gray-500 dark:text-gray-400',
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecondSection;
