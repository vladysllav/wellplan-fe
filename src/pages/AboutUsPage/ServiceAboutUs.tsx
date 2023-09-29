import React from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
    const services = [
        {
            title: "Communication",
            details:
                "The consultation can be conducted using audio or video communication.",
            icon: (
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* ... ваш SVG-код ... */}
                </svg>
            ),
        },
        {
            title: "Date and time",
            details:
                "The consultation is provided at a time agreed in advance between the doctor and the patient.",
            icon: (
                <svg
                    width="39"
                    height="22"
                    viewBox="0 0 39 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* ... ваш SVG-код ... */}
                </svg>
            ),
        },
        {
            title: "Message",
            details:
                "The patient and the doctor receive information about all events.",
            icon: (
                <svg
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* ... ваш SVG-код ... */}
                </svg>
            ),
        },
        {
            title: "Required information",
            details:
                "When making an appointment for a consultation, the patient can send the doctor files.",
            icon: (
                <svg
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* ... ваш SVG-код ... */}
                </svg>
            ),
        },
        {
            title: "Patient card",
            details:
                "The entire history of consultations, analysis data, research, any other data are stored in " +
                "the \"Patient Card\" ",
            icon: (
                <svg
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* ... ваш SVG-код ... */}
                </svg>
            ),
        },
        {
            title: "Questions for the doctor",
            details:
                "After receiving recommendations from the doctor, the patient has the opportunity to ask questions",
            icon: (
                <svg
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* ... ваш SVG-код ... */}
                </svg>
            ),
        },
    ];

    return (
        <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-violet-100">
            <div className="container">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <h2 className="mb-4 text-4xl font-semibold text-blue-500 dark:text-gray-300">
                Our Services
              </h2>
                            <h3 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                                What We Offer
                            </h3>
                            <p className="mb-10 text-base leading-7 text-gray-700 dark:text-gray-400">
                                Platform provides patients with a number<br/>of services, including the following:
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-4">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            details={service.details}
                            icon={service.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Service;
