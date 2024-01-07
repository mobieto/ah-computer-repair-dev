import React from 'react';
import { Link } from 'react-scroll';
import { Fade } from 'react-awesome-reveal';

import VirusIcon from '../../assets/virus.png';
import HardDiskIcon from '../../assets/hard-disk.png';
import DownloadIcon from '../../assets/download.png';
import ComputerIcon from '../../assets/computer.png';
import FoldersIcon from '../../assets/folders.png';
import LaptopIcon from '../../assets/laptop.png';

export default function Services() {
    const cards = [
        {title: "Virus Removal", desc: "Hello world", icon: VirusIcon, alt: "Virus"},
        {title: "Hardware Replacement", desc: "Hello world", icon: HardDiskIcon, alt: "Hard Disk"},
        {title: "Software Installation", desc: "Hello world", icon: DownloadIcon, alt: "Download"},
        {title: "Custom PC Build", desc: "Hello world", icon: ComputerIcon, alt: "Computer"},
        {title: "Data Recovery", desc: "Hello world", icon: FoldersIcon, alt: "Folders"},
        {title: "Laptop Screen Replacement", desc: "Hello world", icon: LaptopIcon, alt: "Laptop"},
    ]

    return (
        <section id="services-section" className="flex flex-col align-middle w-full overflow-y-auto bg-white dark:bg-[#23262F]">
            <span className="mt-[8rem] font-poppins font-bold text-5xl text-center text-gray-900 dark:text-white">Our Services</span>
            <span className="mt-[1.4rem] w-[90%] ml-[5%] md:ml-[20%] md:w-[60%] font-poppins font-light text-base text-center text-gray-900 dark:text-white">
            Our experts deliver swift and reliable computer repair services, covering both hardware and software issues. Trust us for efficient solutions to keep your technology running smoothly.
            </span>

            <div className="flex flex-row flex-wrap mt-14 justify-center gap-10">
                <Fade cascade={true} damping={.2} triggerOnce={true}>
                    {
                        cards.map((card) => {
                            return (
                                <div className="flex flex-col bg-gray-200 dark:bg-[#2E313C] rounded-xl h-[21rem] w-[15rem] shadow-[0_28px_52px_-15px_rgba(0,0,0,0.6)] motion-safe:hover:h-[23rem] motion-safe:hover:w-[17rem] [transition:width_.3s,height_.3s]">
                                    <img src={card.icon} className="h-10 w-10 m-4" alt="Virus"/>
                                    <span className="w-[90%] ml-4 mt-2 text-gray-900 dark:text-white font-poppins font-semibold">{card.title}</span>
                                    <span className="w-[90%] ml-4 mt-1 text-gray-900 dark:text-white font-poppins font-light">{card.desc}</span>
                                </div>
                            )
                        })
                    }
                </Fade>
            </div>

            <span className="mt-[2rem] mb-[1.5rem] w-[90%] ml-[5%] md:ml-[20%] md:w-[60%] font-poppins font-light text-sm text-center text-gray-900 dark:text-white">
                We can't fit everything here, but if you'd like to know more, <Link to="contact-section" className="text-blue-500 underline cursor-pointer">get in touch.</Link>
            </span>
        </section>
    )
}