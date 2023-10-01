import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => setIsVisible(window.pageYOffset > 300);
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <Link
            to="top"
            smooth={true}
            duration={500}
            className={`${
                isVisible ? 'block' : 'hidden'
            } fixed bottom-4 right-4 bg-indigo-900 text-white p-2 rounded-full hover:bg-indigo-700 focus:outline-none border-2 border-violet-100`}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
        </Link>
    );
};

export default ScrollToTopButton;
