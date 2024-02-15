import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Logo from '../../assets/logo.png';

export default function Navbar() {
    const [mobileNavDisplay, setMobileNavDisplay] = useState("translate-x-[12rem]");
    const [navBgVisState, setNavBgVisState] = useState("h-[0rem]");
    const [navMenuState, setNavMenuState] = useState(false);

    const navLinks = [
        {name: "Home", to: "home-section"},
        {name: "About", to: "about-section"},
        {name: "Services", to: "services-section"},
        {name: "Pricing", to: "pricing-section"},
        {name: "Contact", to: "contact-section"},
    ]

    const genericHamburgerLine = "h-[2px] w-full my-1 rounded-full bg-gray-900 dark:bg-white transition ease transform duration-300";
    const navDefaultLinkStyle = "block p-1 font-comfortaa text-gray-900 rounded hover:text-blue-600 dark:text-white dark:text-shadow-[0_1px_2px_#000000] cursor-pointer [&.active]:text-blue-600";
    const navMobileLinkStyle = "block py-2 font-comfortaa w-full text-center hover:bg-gray-400 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded cursor-pointer [&.active]:bg-blue-600";

    function onScroll() {
        window.scrollY > 110 ? setNavBgVisState("h-[4.5rem]") : setNavBgVisState("h-[0rem]");
    }

    useEffect(() => {
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, []);

    return (
        <>
            {/* main navbar */}
            <nav className={"fixed min-w-[21rem] w-full bg-gray-200 dark:bg-[#0e1014]  [transition:height_.5s] z-50 pointer-events-none select-none " + navBgVisState}>
                <div className="flex items-center justify-between p-5">
                    <Link to="home-section"
                    className="flex items-center space-x-4 rtl:space-x-reverse pointer-events-auto cursor-pointer">
                        <img src={Logo} className="h-8" alt="Logo" />
                        <span className="text-2xl font-normal whitespace-nowrap text-gray-950 dark:text-white font-dosis">AH Computer Repair</span>
                    </Link>

                    <button type="button" className="flex flex-col items-center justify-center w-8 h-8 md:hidden pointer-events-auto"
                        onClick={() => {
                            setMobileNavDisplay(mobileNavDisplay === "translate-x-0" ? "translate-x-[12rem]" : "translate-x-0");
                            setNavMenuState(!navMenuState);
                        }
                    }>
                        <div className={`${genericHamburgerLine} ${navMenuState ? "rotate-45 translate-y-[10px]" : ""}`}></div>
                        <div className={`${genericHamburgerLine} ${navMenuState ? "scale-x-0" : ""}`}></div>
                        <div className={`${genericHamburgerLine} ${navMenuState ? "-rotate-45 -translate-y-[10px]" : ""}`}></div>
                    </button>

                    <div className="hidden w-auto mr-5 md:block pointer-events-auto">
                        <ul className="flex flex-row rounded-lg space-x-8 rtl:space-x-reverse">
                            {navLinks.map((item) => {
                                return (
                                    <li>
                                        <Link to={item.to} smooth={true} duration={600} spy={true} activeClass="active"
                                        className={navDefaultLinkStyle}>
                                            {item.name}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
            
            {/* mobile navbar */}
            <nav className={"fixed h-full w-48 right-0 bg-white dark:bg-[#0e1014] md:translate-x-[12rem] transition-transform duration-[.4s] z-40 select-none " + mobileNavDisplay}>
                <ul className="flex flex-col justify-between items-center gap-2 mt-[4.5rem]">
                    {navLinks.map((item) => {
                        return (
                            <li className="w-full">
                                <Link to={item.to} smooth={true} duration={600} spy={true} activeClass="active"
                                className={navMobileLinkStyle}>
                                    {item.name}
                                </Link>
                            </li>
                        )
                    })}

                    <span className="absolute bottom-1 w-full text-xs text-center text-gray-900 dark:text-white opacity-80 dark:opacity-40">© 2024 AH Computer Repair</span>
                </ul>
            </nav>

            {/* Black tint when mobile nav open */}
            <div className={`fixed w-[100vw] h-[100vh] bg-black md:opacity-0 z-30 transition-opacity duration-500 pointer-events-none ${navMenuState ? "opacity-60" : "opacity-0"}`}></div>
        </>
    )
}