import React from 'react';

export default function Pricing() {
    return (
        <section id="pricing-section">
            <div className="flex flex-col align-middle bg-white dark:bg-[#171a20] w-full h-[100vh]">
                <span className="w-[90%] ml-[5%] mt-[8rem] text-5xl text-center text-gray-900 dark:text-white font-poppins font-bold">Pricing</span>
                <ul className="text-center mt-12 font-poppins space-y-3">
                    <li>Virus Removal: From £13</li>
                    <li>Hardware Replacement: From £12 + Part costs</li>
                    <li>New PSU installation: From £15</li>
                    <li>Software Installation: From £11</li>
                    <li>Custom PC Build: From £45 (Labour only)</li>
                    <li>Data Recovery: From £16</li>
                    <li>Laptop Screen Replacement: From £45 + Part costs</li>
                    <li>Windows Reinstall: From £23 (With data backup £28)</li>
                </ul>
                <span className="text-center font-poppins mt-14">All prices listed above are a guide. For an accurate quote, we will first review the issues with your device.</span>
            </div>
        </section>
    )
}