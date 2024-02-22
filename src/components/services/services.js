import React from 'react';
import { Link } from 'react-scroll';
import { Fade } from 'react-awesome-reveal';

import VirusIcon from '../../assets/virus.png';
import HardDiskIcon from '../../assets/hard-disk.png';
import DownloadIcon from '../../assets/download.png';
import ComputerIcon from '../../assets/computer.png';
import FoldersIcon from '../../assets/folders.png';
import LaptopIcon from '../../assets/laptop.png';
import WindowsIcon from '../../assets/windows.png';

export default function Services() {
    const cards = [
        {title: "Virus Removal", desc: "At AH Computer Repair, we specialize in thorough virus removal services.\n\nWe'll conduct a comprehensive scan of your system, identify any malicious software, and eliminate it promptly, restoring your computer's performance and security.", 
            icon: VirusIcon, alt: "Virus"},

        {title: "Hardware Replacement", desc: "We are here to help with seamless hardware replacement services.\n\n Whether it's a malfunctioning hard drive or a worn-out power supply, we'll diagnose the issue and replace the faulty hardware to get your system running smoothly again.",
            icon: HardDiskIcon, alt: "Hard Disk"},
        {title: "Software Installation", desc: "Need to install new software or update existing programs on your computer? Then come to us for hassle-free software installation services.\n\n We'll ensure everything is installed correctly and configured to meet your needs.", 
            icon: DownloadIcon, alt: "Download"},
        {title: "Custom PC Build", desc: "Are you looking for a new rig? Then look no further!\n\nWe make custom tailored, high-performance PC builds designed to match your requirements and budget.", 
            icon: ComputerIcon, alt: "Computer"},
        {title: "Data Recovery", desc: "Accidentally deleted important files? Hard drive gave up on you? Don't despair – we are here to help.\n\n Using advanced techniques and specialized tools, we'll attempt to recover your lost data and restore it to its original state, minimizing downtime and ensuring that your valuable files are safe and accessible once again.", 
            icon: FoldersIcon, alt: "Folders"},
        {title: "Laptop Screen Replacement", desc: "Our expert technicians also offer fast and reliable laptop screen replacement services.\n\n Restore your laptops's visual clarity and functionality with a seamless screen replacement to get you back to work or play in no time.", 
            icon: LaptopIcon, alt: "Laptop"},
        {title: "Windows Reinstall", desc: "Experiencing system errors or sluggish performance? Our Windows reinstallation service offers a fresh start for your computer.\n\nWe will swiftly reinstall Windows, ensuring a clean, optimized system for enhanced performance and reliability.", 
            icon: WindowsIcon, alt: "Windows"},
    ]

    return (
        <section id="services-section" className="flex flex-col align-middle w-full overflow-y-auto bg-white dark:bg-[#171a20]">
            <span className="mt-36 font-poppins font-bold text-5xl text-center text-gray-900 dark:text-white">Our Services</span>
            <span className="mt-8 w-[90%] ml-[5%] md:ml-[20%] md:w-[60%] font-poppins font-light text-base text-center text-gray-900 dark:text-white">
            Our experts deliver swift and reliable computer repair services, covering both hardware and software issues. Trust us for efficient solutions to keep your technology running smoothly.
            </span>

            <div className="flex flex-row max-w-[90%] ml-[5%] flex-wrap mt-14 justify-center gap-10">
                <Fade cascade={true} damping={.2} triggerOnce={true}>
                    {
                        cards.map((card) => {
                            return (
                                <div className="flex flex-col bg-gray-100 dark:bg-[#252a33] rounded-xl h-[24rem] w-[19rem] shadow-[0_28px_52px_-15px_rgba(0,0,0,0.6)]">
                                    <img src={card.icon} className="h-10 w-10 m-4" alt={card.alt}/>
                                    <span className="w-[90%] mx-auto text-gray-900 dark:text-white font-poppins font-semibold text-lg">{card.title}</span>
                                    <span className="w-[90%] mx-auto mt-4 text-gray-900 dark:text-white font-poppins font-light text-sm whitespace-pre-line">{card.desc}</span>
                                </div>
                            )
                        })
                    }
                </Fade>
            </div>

            <span className="mt-[3rem] mb-[1.5rem] w-[90%] ml-[5%] md:ml-[20%] md:w-[60%] font-poppins font-light text-sm text-center text-gray-900 dark:text-white">
                We can't fit everything here, but if you'd like to know more, <Link to="contact-section" className="text-blue-500 underline cursor-pointer">get in touch.</Link>
            </span>
            <hr className="w-[90%] mx-auto mt-8 border-black bg-black dark:bg-white dark:border-white opacity-15"/>
        </section>
    )
}