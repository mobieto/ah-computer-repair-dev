import React from 'react';
import { Fade } from 'react-awesome-reveal';

export default function Pricing() {
    const priceListItems = [
        "Virus Removal: From £13",
        "Hardware Replacement: From £12 + Part costs",
        "New PSU installation: From £15",
        "Software Installation: From £11",
        "Custom PC Build: From £45 (Labour only)",
        "Data Recovery: From £16",
        "Laptop Screen Replacement: From £45 + Part costs",
        "Windows Reinstall: From £23 (W/ Data backup £28)"
    ]

    return (
        <section id="pricing-section" className="flex flex-col align-middle items-center bg-white dark:bg-[#171a20] w-full overflow-y-auto">
            <span className="w-[90%] mt-36 text-5xl text-center text-gray-900 dark:text-white font-poppins font-bold">Pricing</span>
            <Fade cascade={true} damping={.1} triggerOnce={true}>
                <ul className="flex flex-col items-center text-center min-w-[24rem] w-[50%] mt-20 font-poppins space-y-1.5">
                    {priceListItems.map((item) => {
                        return (<li className="bg-opacity-10 dark:bg-opacity-5 bg-black dark:bg-white rounded-md h-12 w-full flex flex-row items-center justify-center">{item}</li>)
                    })}
                </ul>
            </Fade>
            <span className="text-center font-poppins mt-20">All prices listed above are a guide. For an accurate quote, we will first need to review the issues with your device.</span>
            <hr className="w-[90%] mx-auto mt-16 border-black bg-black dark:bg-white dark:border-white opacity-15"/>
        </section>
    )
}