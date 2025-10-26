"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSafeMediaQuery } from "@/hooks/useSafeMediaQuery";
import { SampleProjectsData } from "@/mock/data";
import { CustomNavbar, ProjectSectionCard, Icon } from "@/components";

// --------------------------------------

const ViewAllProjectComponent = () => {
    const coustomXL = useSafeMediaQuery("(min-width:1364px)");

    const truncateDesc = (text = "", limit = 85) => {
        if (!text) return "";
        return text.length > limit ? text.substring(0, limit) + "..." : text;
    };

    const truncateHeading = (text = "", limit = 20) => {
        if (!text) return "";
        return text.length > limit ? text.substring(0, limit) + "..." : text;
    };

    return (
        <>
            <div className="w-full dark:bg-[#020817]">
                {/* Navbar  */}
                <CustomNavbar path={"/"} title="Projects that Speak" subTitleBtn="Home" />

                <div className="w-fill flex justify-center items-center pt-12">
                    <div
                        className={`max-w-[1300px] h-full flex-col w-full gap-x-4 flex justify-center items-start  ${coustomXL ? "px-0" : "px-8"}`}
                    >
                        {/* search and filter  */}
                        <div className="w-full items-start gap-y-4 lg:gap-y-0 flex-col lg:flex-row flex justify-between lg:items-center">
                            <div className="flex shadow justify-center items-center gap-x-4 w-full lg:w-[75%] border-[1px] rounded-xl dark:border-[#1e293b] border-[#e2e8f0] py-2 px-3 focus-within:border-primary dark:focus-within:border-white transition-all duration-200">
                                <Icon className="text-[#64748b]" icon="iconoir:search" />
                                <input
                                    type="text"
                                    className="w-full md:text-sm focus:outline-none border-none bg-transparent"
                                    placeholder="Search Projects..."
                                />
                            </div>
                            <div className="flex justify-between lg:justify-evenly items-center w-full lg:w-[30%]">
                                <button className="shadow font-medium text-xs hover:bg-[#2563ebe6] text-white bg-primary px-2 lg:px-3 py-2 rounded-md">
                                    All
                                </button>
                                <button className="shadow font-medium text-xs hover:bg-[#f1f5f9] text-black bg-white px-2 lg:px-3 py-2 rounded-md dark:hover:bg-[#1e293b] dark:hover:text-[#f8fafc] dark:text-white dark:border-[#1e293b] dark:bg-[#020817] border-[#e2e8f0] border-[1px]">
                                    Full Stack
                                </button>
                                <button className="shadow font-medium text-xs hover:bg-[#f1f5f9] text-black bg-white px-2 lg:px-3 py-2 rounded-md dark:hover:bg-[#1e293b] dark:hover:text-[#f8fafc] dark:text-white dark:border-[#1e293b] dark:bg-[#020817] border-[#e2e8f0] border-[1px]">
                                    Frontend
                                </button>
                                <button className="shadow font-medium text-xs hover:bg-[#f1f5f9] text-black bg-white px-2 lg:px-3 py-2 rounded-md dark:hover:bg-[#1e293b] dark:hover:text-[#f8fafc] dark:text-white dark:border-[#1e293b] dark:bg-[#020817] border-[#e2e8f0] border-[1px]">
                                    Backend
                                </button>
                            </div>
                        </div>

                        <p className="pt-8 text-[#64748b]">Showing 9 of 9 projects</p>

                        {/* Featured Project  */}
                        <div className="w-full flex flex-col pt-10 gap-y-4">
                            <p className="text-2xl font-semibold">Featured Projects</p>
                            <div className="w-full pt-4 pb-8 gap-6 flex flex-wrap items-center justify-center">
                                {SampleProjectsData?.filter((el) => el?.featured).map((ele, index) => {
                                    return (
                                        <ProjectSectionCard ele={ele} key={index} />
                                    );
                                })}
                            </div>
                        </div>

                        {/* All Project  */}
                        <div className="w-full flex flex-col pt-10 gap-y-4">
                            <p className="text-2xl font-semibold">All Project</p>
                            <div className="w-full pt-4 pb-8 gap-6 flex flex-wrap items-center justify-center">
                                {SampleProjectsData.map((ele, index) => {
                                    return (
                                        <ProjectSectionCard ele={ele} key={index} />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewAllProjectComponent;
