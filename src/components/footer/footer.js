import { React } from 'react';

import EmailImage from '../../assets/email.png';
import PhoneImage from '../../assets/phone.png';
import InstagramImage from '../../assets/instagram.png';
import FacebookImage from '../../assets/facebook.png';
import YoutubeImage from '../../assets/youtube.png';

import EmailImageBlack from '../../assets/email-black.png';
import PhoneImageBlack from '../../assets/phone-black.png';
import InstagramImageBlack from '../../assets/instagram-black.png';
import FacebookImageBlack from '../../assets/facebook-black.png';
import YoutubeImageBlack from '../../assets/youtube-black.png';

export default function Footer() {
    return (
        <section id="footer-section" className="flex flex-col align-middle justify-center w-full from-gray-400 to-gray-100 bg-gradient-to-br dark:from-[#0e1014] dark:to-[#242931] dark:bg-gradient-to-br">
            <div className="flex flex-row flex-wrap gap-x-[14%] gap-y-12 mt-16 justify-center font-poppins">
                <ul>
                    <li className="font-bold text-xl">About</li>
                    <li className="opacity-70 font-extralight mt-4 max-w-64">
                        AH Computer Repair is a leading computer repair service based in Peterborough, UK.
                    </li>
                </ul>
                <ul>
                    <li className="font-bold text-xl">Contact</li>
                    <li className="opacity-70 font-extralight mt-4 flex flex-row gap-2">
                        <img src={PhoneImage} alt="phone" className="w-5 h-5 hidden dark:block opacity-80"/>
                        <img src={PhoneImageBlack} alt="phone" className="w-5 h-5 block dark:hidden opacity-80"/>
                        <span>+44 000000000</span>
                    </li>
                    <li className="opacity-70 font-extralight mt-2 flex flex-row gap-2">
                        <img src={EmailImage} alt="email" className="w-5 h-5 hidden dark:block opacity-80"/>
                        <img src={EmailImageBlack} alt="email" className="w-5 h-5 block dark:hidden opacity-80"/>
                        <span>test@email.com</span>
                    </li>
                </ul>
                <ul>
                    <li className="font-bold text-xl">Socials</li>
                    <li className="opacity-70 font-extralight mt-4 flex flex-row gap-2">
                        <img src={InstagramImage} alt="instagram" className="w-5 h-5 hidden dark:block opacity-80"/>
                        <img src={InstagramImageBlack} alt="instagram" className="w-5 h-5 block dark:hidden opacity-80"/>
                        <a href="#" className="hover:underline">Instagram</a>
                    </li>
                    <li className="opacity-70 font-extralight mt-2 flex flex-row gap-2">
                        <img src={FacebookImage} alt="email" className="w-5 h-5 hidden dark:block opacity-80"/>
                        <img src={FacebookImageBlack} alt="email" className="w-5 h-5 block dark:hidden opacity-80"/>
                        <a href="#" className="hover:underline">Facebook</a>
                    </li>
                    <li className="opacity-70 font-extralight mt-2 flex flex-row gap-2">
                        <img src={YoutubeImage} alt="email" className="w-5 h-5 hidden dark:block opacity-80"/>
                        <img src={YoutubeImageBlack} alt="email" className="w-5 h-5 block dark:hidden opacity-80"/>
                        <a href="#" className="hover:underline">YouTube</a>
                    </li>
                </ul>
            </div>
            <hr className="w-[80%] mx-auto mt-12 border-black bg-black dark:bg-white dark:border-white opacity-15"/>
            <div className="flex flex-row flex-wrap mt-8 gap-x-[40%] justify-center">
                <span className="text-sm m-4 text-center text-gray-900 dark:text-white font-poppins dark:opacity-35 font-extralight">© 2024 AH Computer Repair All Rights Reserved</span>
                <span className="text-sm m-4 text-center text-gray-900 dark:text-white font-poppins dark:opacity-35 font-extralight">Website made by Mobin - @mobiuous</span>
            </div>
        </section>
    )
}