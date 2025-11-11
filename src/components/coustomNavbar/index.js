"use client"
import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Icon } from "@/components";

// ----------------------------------------------------

const CustomNavbar = ({ path, title, subTitleBtn }) => {
    const { theme, setTheme } = useTheme();
    return (
        <>
            <div className="w-full sticky top-0 z-[10000] flex justify-center items-center h-[70px] border-b-[1px] dark:border-[#1e293b] border-[#e2e8f0] backdrop-blur-md px-8">
                <div className="w-full max-w-[1300px] flex justify-between" >
                    <div
                        className={`h-full w-4/5 flex justify-start items-center gap-8 lapxl:px-0`}
                    >
                        <Link
                            href={path}
                            className="w-fit flex gap-2 dark:hover:bg-[#1e293b] dark:text-[#f8fafc] rounded-md text-xs py-2 font-medium hover:text-[#020817] hover:bg-[#f1f5f9] justify-center items-center"
                        >
                            <Icon
                                icon={"solar:arrow-left-outline"}
                                width={18}
                                height={18}
                            />
                            {subTitleBtn}
                        </Link>
                        {/* <span className="h-[40%] w-[2px] bg-[#e2e8f0]"></span> */}
                        <p className="text-lg sm:text-2xl font-bold">{title}</p>
                    </div>
                    <div className="flex items-center justify-end w-1/5" >
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="px-3 py-2 rounded-xl dark:hover:bg-[#1E293B] hover:bg-[#e6eaf0] cursor-pointer transition-colors"
                        >
                            <Icon icon={theme === "dark" ? "solar:sun-line-duotone" : "solar:moon-line-duotone"} />
                        </button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default CustomNavbar;
