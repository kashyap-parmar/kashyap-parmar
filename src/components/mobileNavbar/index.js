"use client";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Link } from 'react-scroll';
import { Icon } from "@/components";
import { navbarData } from "@/mock/data";

// -----------------------------------------

const MobileNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const pathname = usePathname();
    const regex = /^\/(#\w+)?$/;

    useEffect(() => {
        if (typeof window !== "undefined") {
            const hash = window.location.hash;
            if (hash) {
                const el = document.querySelector(hash);
                if (el) {
                    setTimeout(() => {
                        el.scrollIntoView({ behavior: "smooth" });
                    }, 100); // small delay so DOM is ready
                }
            }
            setIsMenuOpen(false)
        }
    }, [pathname]); // run when route changes

    return (
        <div className="w-full bg-transparent sticky top-0 z-[10000]">
            {/* Sticky Mobile Navbar */}
            <div className="left-0 right-0 mx-6 backdrop-blur-xl bg-[#FDFEFF] dark:bg-[#030919] card-glow flex items-center px-6 py-4 justify-between lg:hidden rounded-full">
                <div>
                    <p className="cursor-pointer text-2xl bg-gradient-to-r from-primary via-blue-600 to-cyan-600 bg-clip-text text-transparent logo-animate font-bold">
                        Mern <span className="dark:text-white text-black" > Developer </span>
                    </p>
                </div>
                <div className="flex items-center justify-center gap-x-2 ">
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className={`px-3 py-2 rounded-xl dark:hover:bg-[#1E293B] hover:bg-[#e6eaf0] cursor-pointer`}
                    >
                        {theme === "dark" ? (
                            <Icon icon={"solar:sun-line-duotone"} />
                        ) : (
                            <Icon icon={"solar:moon-line-duotone"} />
                        )}
                    </button>
                    <div
                        className={`px-3 py-2 rounded-xl dark:hover:bg-[#1E293B] hover:bg-[#e6eaf0] cursor-pointer`}
                    >
                        {isMenuOpen ? (
                            <Icon
                                height={15}
                                width={15}
                                icon={"uiw:close"}
                                onClick={() => setIsMenuOpen(false)}
                            />
                        ) : (
                            <Icon
                                height={15}
                                width={15}
                                icon={"proicons:menu"}
                                onClick={() => setIsMenuOpen(true)}
                            />
                        )}
                    </div>
                </div>
            </div>

            {/* Dropdown menu stays under sticky bar */}
            {isMenuOpen && (
                <div className="fixed top-[110px] z-[10000] left-0 right-0 mx-6 bg-white dark:bg-[#030919] card-glow flex items-center p-9 px-6 justify-between lg:hidden rounded-2xl">
                    <div className={`${regex.test(pathname) ? "flex" : "hidden"} flex-col gap-6`}>
                        {navbarData?.length > 0 && navbarData?.map((ele, index) => {
                            return (
                                <Link
                                    key={index}
                                    to={ele.url}
                                    spy={true}
                                    smooth={true}
                                    duration={300}
                                    onClick={() => setIsMenuOpen(false)}
                                    activeClass="text-primary"
                                    className="dark:hover:text-primary cursor-pointer transition-all duration-300 hover:text-primary text-sm font-medium text-[#64748b] dark:text-gray-400"
                                >
                                    {ele.title}
                                </Link>
                            );
                        })}
                    </div>
                    <div className={`${regex.test(pathname) ? "hidden" : "flex"}  flex-col gap-6`}>
                        {navbarData.map((ele, index) => (
                            <NextLink
                                key={index}
                                href={`/#${ele?.url}`}
                                className="dark:hover:text-primary cursor-pointer transition-all duration-300 hover:text-primary text-sm font-medium text-[#64748b] dark:text-gray-400"
                            >
                                {ele.title}
                            </NextLink>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileNavbar;
