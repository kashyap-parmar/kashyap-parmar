"use client";
import NextLink from "next/link";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { Link } from 'react-scroll';
import { navbarData } from "@/mock/data";
import { MobileNavbar, Icon } from "@/components";

// ---------------------------------------------------

const Navbar = ({ show }) => {
    const { theme, setTheme } = useTheme();
    const pathname = usePathname();
    const router = useRouter();
    const notShowingTrue = (pathname.includes("pjt") || pathname.includes("blog") || pathname.includes("admin"));
    const regex = /^\/(#\w+)?$/;
    const otherRoutes = /^\/\w.+$/;

    const handleNavigate = (url) => {
        if (url === "/3d-model") {
            router.push(url);
        }
        return
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            const hash = window.location.hash;
            console.log("hash", hash);
            if (hash && !hash.includes("/3d-model")) {
                const el = document?.querySelector(hash);
                if (el) {
                    setTimeout(() => {
                        el.scrollIntoView({ behavior: "smooth" });
                    }, 200);
                }
            }
        }
    }, [pathname]); // run when route changes

    return (
        <div
            className={`${notShowingTrue && !show ? "hidden" : "block"} w-full bg-transparent !sticky !top-[30px] z-[10000]`}
        >
            {/* Desktop Navbar */}
            <div className="hidden lg:flex items-center justify-center w-full bg-transparent">
                <div className="flex gap-8 px-8 card-glow items-center py-4 justify-between w-fit backdrop-blur-xl rounded-full bg-[#FDFEFF] dark:bg-[#030919] transition-colors duration-300">
                    <NextLink href="/#contact">
                        <p className="cursor-pointer text-2xl bg-gradient-to-r from-primary via-blue-600 to-cyan-600 bg-clip-text text-transparent logo-animate font-bold">
                            Mern <span className="dark:text-white text-black" > Developer </span>
                        </p>
                    </NextLink>
                    <div className={`${regex.test(pathname) ? "flex" : "hidden"}  gap-8 `}>
                        {navbarData.map((ele, index) => (
                            <Link
                                key={index}
                                to={ele.url}
                                spy={true}
                                smooth={true}
                                duration={300}
                                onClick={() => handleNavigate(ele?.url)}
                                offset={-30}
                                className="dark:hover:text-primary cursor-pointer transition-all duration-300 hover:text-primary text-sm font-medium text-[#64748b] dark:text-gray-400"
                                activeClass="!text-primary"
                            >
                                {ele.title}
                            </Link>
                        ))}
                    </div>
                    <div className={`${regex.test(pathname) ? "hidden" : "flex"}  gap-8 `}>
                        {navbarData.map((ele, index) => (
                            <NextLink
                                key={index}
                                onClick={() => handleNavigate(ele?.url)}
                                href={`${otherRoutes.test(ele?.url) ? ele?.url : `/#${ele?.url}`}`}
                                className={`${(pathname === "/3d-model" && ele?.url === "/3d-model") && "text-primary"} dark:hover:text-primary cursor-pointer transition-all duration-300 hover:text-primary text-sm font-medium text-[#64748b] dark:text-gray-400`}
                            >
                                {ele.title}
                            </NextLink>
                        ))}
                    </div>
                    <button
                        data-testid="theme-toggle-button-desktop"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="px-3 py-2 rounded-xl dark:hover:bg-[#1E293B] hover:bg-[#e6eaf0] cursor-pointer transition-colors"
                    >
                        <Icon icon={theme === "dark" ? "solar:sun-line-duotone" : "solar:moon-line-duotone"} />
                    </button>

                </div>
            </div >

            {/* Mobile Navbar */}
            <MobileNavbar />
        </div >
    );
};

export default Navbar;
