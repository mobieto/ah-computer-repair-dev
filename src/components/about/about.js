import React from 'react';

import PortraitIcon from '../../assets/portrait.png';

export default function About() {
    return (
        <section id="about-section" className="flex flex-col align-middle justify-center items-center w-full overflow-y-auto to-gray-300 from-white bg-gradient-to-b dark:to-[#323741] dark:from-[#171a20] dark:bg-gradient-to-b">
            <div className="max-w-[80%] mt-20 flex flex-col items-center">
                <div className="h-[280px] w-[280px] mb-16">
                    <div className="h-[290px] w-[290px] dark:bg-[#323841] bg-[#d8d6d6] rounded-full absolute z-0 -translate-x-8 -translate-y-8"></div>
                    <img src={PortraitIcon} alt="Amin" className="h-[280px] w-[280px] rounded-full absolute z-10"/>
                </div>

                <span className="text-lg text-center text-gray-900 dark:text-white font-poppins font-light box-decoration-clone">
                    Hi, I'm Amin, the proud owner of AH Computer Repair. With a passion for technology and a commitment to customer satisfaction,
                    I founded this business with the vision of providing top-quality computer repair services to the Peterborough community.
                    <br/><br/>
                    What truly drives me is the opportunity to make a positive difference in people's lives by alleviating the stress that often come with tech issues.
                    I take pride in my ability to troubleshoot problems efficiently, finding solutions that not only fix the immediate issue but also prevent future headaches.
                </span>
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-8 mt-16 w-full">
                <iframe className="sm:w-[30rem] w-[23rem] sm:h-80 h-72" src="https://www.youtube.com/embed/21O0dngWoRk" title="Custom PC Build" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe className="sm:w-[30rem] w-[23rem] sm:h-80 h-72" src="https://www.youtube.com/embed/gLxW8036TOA" title="Windows 7 Stuck on loading screen SOLVED" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe className="sm:w-[30rem] w-[23rem] sm:h-80 h-72" src="https://www.youtube.com/embed/JAYIY7yQv-M" title="Custom PC Build Persian" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <br/><br/>
            <span className="text-lg text-center text-gray-900 dark:text-white font-poppins font-light m-6 box-decoration-clone">
                No matter the computer problem, you can rely on us to sort it out. We hope you choose us as your next tech repair partner.
            </span>
            <hr className="w-[70%] mx-auto mt-8 border-black bg-black dark:bg-white dark:border-white opacity-15"/>
        </section>
    )
}