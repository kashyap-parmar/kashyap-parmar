"use client"
import { useSafeMediaQuery } from "@/hooks/useSafeMediaQuery";
import Link from "next/link";
import React from "react";
import Icon from "../icon";

// ----------------------------------------------------

const CustomNavbar = ({ path, title, subTitleBtn }) => {
    const coustomXL = useSafeMediaQuery("(min-width:1364px)");

    return (
        <>
            <div className="w-full sticky top-0 z-[10000] flex justify-center items-center h-[70px] border-b-[1px] dark:border-[#1e293b] border-[#e2e8f0] backdrop-blur-md">
                <div
                    className={`max-w-[1300px] h-full w-full gap-x-4 flex justify-start items-center ${coustomXL ? "px-0" : "px-8"}`}
                >
                    <Link className="w-fit" href={path}>
                        <button className="flex dark:hover:bg-[#1e293b] dark:text-[#f8fafc] gap-x-4 rounded-md text-xs px-3 py-2 font-medium hover:text-[#020817] hover:bg-[#f1f5f9] justify-center items-center">
                            <Icon icon={"solar:arrow-left-outline"} />
                            Back to {subTitleBtn}
                        </button>
                    </Link>
                    <span className="h-[40%] w-[2px] bg-[#e2e8f0]"></span>
                    <p className="text-lg sm:text-2xl font-bold">{title}</p>
                </div>
            </div>
        </>
    );
};

export default CustomNavbar;
