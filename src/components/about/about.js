import React from 'react';

import PortraitIcon from '../../assets/portrait.jpg';

export default function About() {
    return (
        <section id="about-section" className="flex flex-col align-middle w-full overflow-y-auto bg-white dark:bg-[#171a20]">
            <span className="w-[90%] ml-[5%] mt-32 text-4xl text-center text-gray-900 dark:text-white font-poppins font-bold">
            Your trusted tech partner in Peterborough.
            </span>
            <span className="w-[80%] ml-[10%] mt-5 text-base text-center text-gray-900 dark:text-white font-poppins font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </span>
            <img src={PortraitIcon} className="object-contain h-80"/>
        </section>
    )
}