import React from 'react';
import { Slide } from 'react-awesome-reveal';

import PortraitIcon from '../../assets/portrait.jpg';

export default function About() {
    return (
        <section id="about-section" className="flex flex-col align-middle justify-center items-center w-full overflow-y-auto bg-white dark:to-[#171a20] dark:from-[#282d35] dark:bg-gradient-to-b">
            <span className="w-[90%] mt-36 text-4xl text-center text-gray-900 dark:text-white font-poppins font-bold">
            Your trusted tech partner in Peterborough.
            </span>
            <span className="w-[80%] mt-14 text-lg text-center text-gray-900 dark:text-white font-poppins font-light">
                AH Computer Repair is your trusted local destination for computer repair services. We understand the frustrations that come with tech malfunctions, which is why we are dedicated
                to providing you with prompt and professional solutions to get you back up and running in no time.
            </span>
            <br/><br/><br/>
            <hr className="w-[90%] mx-auto border-black bg-black dark:bg-white dark:border-white opacity-15"/>
            <br/><br/><br/>
            <div className="max-w-[80%]">
                <div className="h-[280px] w-[280px] mb-6 ml-8 md:ml-0 float-left">
                    <div className="h-[290px] w-[290px] dark:bg-[#323841] bg-[#d8d6d6] rounded-full absolute z-0 -translate-x-8 -translate-y-8"></div>
                    <img src={PortraitIcon} alt="Amin" className="h-[280px] w-[280px] rounded-full absolute z-10"/>
                </div>

                <span className="text-lg text-center text-gray-900 dark:text-white font-poppins font-light box-decoration-clone md:ml-8 ml-0">
                    Hi, I'm Amin, the proud owner of AH Computer Repair. With a passion for technology and a commitment to customer satisfaction,
                    I founded this business with the vision of providing top-quality computer repair services to the Peterborough community.
                    <br/><br/>
                    What truly drives me is the opportunity to make a positive difference in people's lives by alleviating the stress that often come with tech issues.
                    I take pride in my ability to troubleshoot problems efficiently, finding solutions that not only fix the immediate issue but also prevent future headaches.
                </span>
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-8 mt-12">
                <iframe width="400" height="290" src="https://www.youtube.com/embed/21O0dngWoRk" title="Custom PC Build" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe width="400" height="290" src="https://www.youtube.com/embed/gLxW8036TOA" title="Windows 7 Stuck on loading screen SOLVED" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe width="400" height="290" src="https://www.youtube.com/embed/JAYIY7yQv-M" title="Custom PC Build Persian" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <br/><br/>
            <span className="text-lg text-center text-gray-900 dark:text-white font-poppins font-light m-6 box-decoration-clone">
                No matter the computer problem, you can rely on us to sort it out. We hope you choose us as your next tech repair partner.
            </span>
            <hr className="w-[90%] mx-auto mt-8 border-black bg-black dark:bg-white dark:border-white opacity-15"/>
        </section>
    )
}