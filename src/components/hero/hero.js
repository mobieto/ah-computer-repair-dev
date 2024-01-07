import React from 'react';
import { Link } from 'react-scroll';

export default function Hero() {
    return (
        <section id="home-section" className="flex flex-col justify-center items-center w-full h-[100vh] bg-[url('https://wallpapercave.com/wp/wp9724504.jpg')] bg-cover bg-center bg-no-repeat">
            <span className="w-[90%] text-center text-white text-5xl font-poppins font-semibold text-shadow-[0_1px_2px_#000000]">
                Fast and Affordable Computer Repairs
                <br/>
                <span className="inline-block mt-5 w-full text-center text-white text-lg leading-8 font-poppins font-extralight text-shadow-[0_1px_2px_#000000]">
                    At AH Computer Repair, we pride ourselves on efficient solutions to your computer problems.
                </span>
            </span>

            <div className="flex flex-row justify-center items-center mt-8 gap-8 sm:gap-10">
                <Link to="contact-section" className="bg-blue-800 hover:bg-blue-900 rounded-2xl h-12 w-44 sm:h-[3.2rem] sm:w-[12rem] text-center text-lg sm:text-xl font-semibold leading-[3rem] sm:leading-[3.2rem] text-white cursor-pointer [transition:background-color_.1s]">Schedule Repair</Link>
                <Link to="services-section" className="text-center text-lg sm:text-xl text-white hover:text-gray-300 font-semibold underline underline-offset-[4px] cursor-pointer [transition:color_.1s] text-shadow-[0_1px_2px_#000000]">Our Services</Link>
            </div>
        </section>
    )
}