import React from 'react';
import { Link } from 'react-scroll';

export default function Hero() {
    return (
        <section id="home-section" className={`flex flex-col justify-center items-center w-full h-[100vh] bg-hero bg-cover bg-center bg-no-repeat`}>
            <span className="w-[90%] text-center text-white text-5xl font-poppins font-semibold">
                Fast and Affordable Computer Repairs
                <br/>
                <span className="inline-block mt-5 w-full text-center text-white text-lg leading-8 font-poppins font-extralight">
                    At AH Computer Repair, we pride ourselves on efficient solutions to your computer problems.
                </span>
            </span>

            <div className="flex flex-row justify-center items-center mt-8 sm:mr-12 gap-8 sm:gap-10">
                <Link to="contact-section" className="bg-blue-600 hover:bg-blue-800 rounded-2xl h-12 w-44 sm:h-[3.2rem] sm:w-[12rem] text-center text-lg sm:text-xl font-semibold leading-[3rem] sm:leading-[3.2rem] text-white cursor-pointer [transition:background-color_.1s]">Schedule Repair</Link>
                <Link to="services-section" className="after:block after:bg-white after:absolute after:h-0.5 sm:after:w-[7.2rem] after:w-[6.4rem] after:origin-center after:scale-x-0 hover:after:scale-x-100 text-center text-lg sm:text-xl text-white font-semibold cursor-pointer after:transition after:transform after:delay-[50]">Our Services</Link>
            </div>
        </section>
    )
}