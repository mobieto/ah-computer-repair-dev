import React from 'react';

export default function About() {
    return (
        <section id="about-section" className="flex flex-col align-middle w-full overflow-y-auto bg-white dark:bg-[#23262F]">
            <span className="w-[90%] ml-[5%] mt-32 text-4xl text-center text-white font-poppins font-bold">
            Your trusted tech partner in Peterborough.
            </span>
            <span className="w-[80%] ml-[10%] mt-5 text-base text-center text-white font-poppins font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </span>
            <div className="flex flex-row flex-wrap justify-center gap-8 mt-8">
                <div className="w-64 h-96 bg-white"></div>
                <div className="w-64 h-96 bg-white"></div>
                <div className="w-64 h-96 bg-white"></div>
                <div className="w-64 h-96 bg-white"></div>
                <div className="w-64 h-96 bg-white"></div>
                <div className="w-64 h-96 bg-white"></div>
            </div>
        </section>
    )
}