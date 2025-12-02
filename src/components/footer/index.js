"use client";
import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Icon } from "@/components";
import {
    email,
    github,
    linkedin,
    navbarData
} from "@/mock/data";

// -----------------------------------------------------------

const Footer = () => {
    const pathname = usePathname();
    const notShowingTrue = (pathname.includes("blog") || pathname.includes("admin"));

    useEffect(() => {
        if (typeof window !== "undefined") {
            const hash = window.location.hash;
            if (hash && !hash.includes("/")) {
                const el = document.querySelector(hash);
                if (el) {
                    setTimeout(() => {
                        el.scrollIntoView({ behavior: "smooth" });
                    }, 100); // small delay so DOM is ready
                }
            }
        }
    }, [pathname]); // run when route changes

    return (
        <div className={`${notShowingTrue ? "hidden" : "flex"} w-full  justify-center items-center py-16 bg-gradient-to-br from-[#f1f5f980] to-[#ffffff] dark:from-[#09173c6c] dark:to-[#020817] dark:border-[#1e293b] border-t`}>
            <div
                className={`max-w-[1300px] w-full flex-col gap-y-10 flex justify-center items-center lapxl:px-0 px-8`}
            >
                {/* Upper  */}
                <div className="w-full flex-col gap-y-8 md:gap-y-0 md:flex-row flex justify-between">
                    <div className="w-full md:w-[40%] flex flex-col gap-y-8">
                        <div className="flex flex-col gap-y-4">
                            <p className="text-3xl bg-gradient-to-r from-primary via-blue-600 to-cyan-600 bg-clip-text text-transparent logo-animate font-bold">
                                Kashyap.
                            </p>
                            <p className="text-[#64748b] leading-relaxed">
                                AI-Powered MERN Stack Developer passionate about building exceptional digital experiences. Let&apos;s create something amazing together.
                            </p>
                        </div>

                        <div className="flex gap-x-4">
                            <div className="w-12 h-12 cursor-pointer rounded-full hover:bg-[#2563eb] flex justify-center items-center group ">
                                <Link href={github} target="_blank" >
                                    <Icon
                                        icon={"line-md:github"}
                                        className={
                                            "text-black dark:text-white group-hover:text-white"
                                        }
                                    />
                                </Link>
                            </div>
                            <div className="w-12 h-12 cursor-pointer rounded-full hover:bg-[#2563eb] flex justify-center items-center group ">
                                <Link href={linkedin} target="_blank" >
                                    <Icon
                                        icon={"meteor-icons:linkedin"}
                                        className={
                                            "text-black dark:text-white group-hover:text-white"
                                        }
                                    />
                                </Link>
                            </div>
                            <div className="w-12 h-12 cursor-pointer rounded-full hover:bg-[#2563eb] flex justify-center items-center group ">
                                <Link href={`mailto:${email}`} target="_blank" >
                                    <Icon
                                        icon={"material-symbols:mail-outline"}
                                        className={
                                            "text-black dark:text-white group-hover:text-white"
                                        }
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-[60%] flex justify-between md:justify-evenly">
                        <div className="flex flex-col gap-y-6">
                            <p className="font-bold text-lg">Quick Links</p>
                            <div className="flex flex-col gap-y-4">
                                {
                                    navbarData.map((ele, index) => {
                                        return (
                                            <Link
                                                key={index}
                                                href={ele?.url === '/3d-model' ? ele?.url : `/#${ele?.url}`}
                                                className="cursor-pointer hover:text-primary text-[#64748b] transition-colors">
                                                {ele?.title}
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-6">
                            <p className="font-bold text-lg">Services</p>
                            <div className="flex [&>p]:text-[#64748b] flex-col gap-y-4">
                                <p className="transition-colors">
                                    Web Development
                                </p>
                                <p className="transition-colors">
                                    Frontend Development
                                </p>
                                <p className="transition-colors">
                                    Figma to React / Next js
                                </p>
                                <p className="transition-colors">
                                    Backend / API Development
                                </p>
                                <p className="transition-colors">
                                    Freelancing
                                </p>
                                <p className="transition-colors">
                                    Remote Work
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full border-t-[1px] gap-y-4 md:gap-y-0 dark:border-[#1e293b] border-[#e2e8f0] pt-8 flex flex-col md:flex-row justify-between items-center md:items-end">
                    <p className="text-[#64748b] text-sm md:text-base">
                        © 2025 - Present, Kashyap Parmar - MERN developer all rights reserved.
                    </p>
                    <div className="flex gap-x-6">
                        <Link
                            href={"/privacy-policies"}
                            className={`text-[#64748b] cursor-pointer text-sm hover:text-primary ${pathname === "/privacy-policies" && "pointer-events-none text-primary"}`}
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href={"/terms-conditions"}
                            className={`text-[#64748b] cursor-pointer text-sm hover:text-primary  ${pathname === "/terms-conditions" && "pointer-events-none text-primary"}`}
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Footer;
