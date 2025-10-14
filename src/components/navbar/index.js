"use client";
import { useTheme } from "next-themes";
import { useState } from "react";
import Icon from "../icon";
import { navbarData } from "@/mock/data";
import MobileNavbar from "../mobileNavbar";
import { Link } from 'react-scroll';

// ---------------------------------------------------

const Navbar = () => {

    const [navbarList] = useState(navbarData);
    const { theme, setTheme } = useTheme();

    return (
        <>
            {/* Desktop Navbar */}
            <nav className="sticky top-[30px] z-[10000] items-center justify-center hidden w-full bg-transparent lg:flex">
                <div className="flex px-8 card-glow items-center py-4 max-w-[860px] justify-between w-full backdrop-blur-xl rounded-full bg-[#FDFEFF] dark:bg-[#030919] transition-colors duration-300">
                    <Link to="contact">
                        <p className="cursor-pointer text-2xl bg-gradient-to-r from-primary via-blue-600 to-cyan-600 bg-clip-text text-transparent logo-animate font-bold">
                            Mern <span className="dark:text-white text-black" > Developer </span>
                        </p>
                    </Link>
                    <div className="flex gap-8">
                        {navbarList.map((ele, index) => (
                            <Link
                                key={index}
                                to={ele.url}
                                spy={true}
                                smooth={true}
                                duration={300}
                                className="dark:hover:text-primary cursor-pointer transition-all duration-300 hover:text-primary text-sm font-medium text-[#64748b] dark:text-gray-400"
                                activeClass="text-primary"
                            >
                                {ele.title}
                            </Link>
                        ))}
                    </div>
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="px-3 py-2 rounded-xl dark:hover:bg-[#1E293B] hover:bg-[#e6eaf0] cursor-pointer transition-colors"
                    >
                        <Icon icon={theme === "dark" ? "solar:sun-line-duotone" : "solar:moon-line-duotone"} />
                    </button>

                </div>
            </nav>

            {/* Mobile Navbar */}
            <MobileNavbar />
        </>
    );
};

export default Navbar;
