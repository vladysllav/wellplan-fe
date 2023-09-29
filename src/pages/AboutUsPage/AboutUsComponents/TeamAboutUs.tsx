import React from "react";

type TeamCardProps = {
    imageSrc: string;
    name: string;
    profession: string;
};

const TeamCard: React.FC<TeamCardProps> = ({imageSrc, name, profession}) => {
    return (
        <div className="w-full px-4 md:w-1/2 xl:w-1/4 bg-violet-100">
            <div className="mx-auto mb-10 w-full max-w-[370px]">
                <div className="relative overflow-hidden rounded-lg">
                    <img src={imageSrc} alt={name} className="w-full"/>
                    <div className="absolute left-0 w-full text-center bottom-5">
                        <div className="relative px-3 py-5 mx-5 overflow-hidden bg-white rounded-lg">
                            <h3 className="text-base font-semibold text-dark">{name}</h3>
                            <p className="text-sm text-body-color">{profession}</p>
                            <div className="absolute bottom-0 left-0">
                                <svg
                                    width={61}
                                    height={30}
                                    viewBox="0 0 61 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        cx={16}
                                        cy={45}
                                        r={45}
                                        fill="#13C296"
                                        fillOpacity="0.11"
                                    />
                                </svg>
                            </div>
                            <div className="absolute top-0 right-0">
                                <svg
                                    width={20}
                                    height={25}
                                    viewBox="0 0 20 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Team: React.FC = () => {
    return (
        <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
            <div className="container">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                            <h2 className="mb-4 text-4xl font-semibold text-blue-500 dark:text-gray-300">
                                Our Team
                            </h2>
                            <p className="text-base text-body-color">
                                There are many variations of passages of Lorem Ipsum available
                                but the majority have suffered alteration in some form.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center -mx-4">
                    <TeamCard
                        name="Coriss Ambady"
                        profession="Web Developer"
                        imageSrc="https://i.ibb.co/T1J9LD4/image-03-2.jpg"
                    />
                    <TeamCard
                        name="Coriss Ambady"
                        profession="Web Developer"
                        imageSrc="https://i.ibb.co/8P6cvVy/image-01-1.jpg"
                    />
                    <TeamCard
                        name="Coriss Ambady"
                        profession="Web Developer"
                        imageSrc="https://i.ibb.co/30tGtjP/image-04.jpg"
                    />
                    <TeamCard
                        name="Coriss Ambady"
                        profession="Web Developer"
                        imageSrc="https://i.ibb.co/yVVT0Dp/image-02-2.jpg"
                    />
                </div>
            </div>
        </section>
    );
};

export default Team;
