"use client";
import React from "react";
import Icon from "../icon";
import { SampleBlogData } from "@/mock/data";
import { CustomNavbar, BlogFullCardReuse, BlogCardReuse } from "@/components";

// ----------------------------------------

const AllBlogPageComponent = () => {
    return (
        <>
            <div className="w-full dark:bg-[#020817]">

                <CustomNavbar path={"/"} title="Blog & Thoughts" subTitleBtn="Home" />

                <div className="w-fill flex justify-center items-center pt-12">
                    <div
                        className={`max-w-[1300px] h-full flex-col w-full gap-x-4 flex justify-center items-start lapxl:px-0 px-8`}
                    >
                        {/* Heading  */}
                        <div className="w-full flex-col gap-y-6 flex justify-center items-center text-center pb-16">
                            <p className="text-4xl md:text-5xl font-bold text-center">
                                Development Insights &
                                <span className="text-gradient pl-2">Technical Thoughts</span>
                            </p>
                            <p className="w-full lg:w-[50%] text-lg text-[#64748b]">
                                Sharing knowledge, experiences, and insights from my journey as
                                a MERN stack developer. Practical tips, best practices, and deep
                                dives into modern web development.
                            </p>
                        </div>

                        {/* Search & Filter  */}
                        <div className="w-full items-start gap-y-4 xl:gap-y-0 flex-col xl:flex-row flex justify-between xl:items-center">
                            {/* Search  */}
                            <div className="flex shadow justify-center items-center gap-x-4 w-full xl:w-[50%] border-[1px] rounded-xl dark:border-[#1e293b] border-[#e2e8f0] py-2 px-3 focus-within:border-primary dark:focus-within:border-white transition-all duration-200">
                                <Icon className="text-[#64748b]" icon="iconoir:search" />
                                <input
                                    type="text"
                                    className="w-full md:text-sm focus:outline-none border-none bg-transparent"
                                    placeholder="Search Projects..."
                                />
                            </div>
                            {/* Filter  */}
                            <div className="flex flex-wrap gap-2 justify-between lg:justify-evenly items-center w-full xl:w-[50%]">
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
                                <button className="shadow font-medium text-xs hover:bg-[#f1f5f9] text-black bg-white px-2 lg:px-3 py-2 rounded-md dark:hover:bg-[#1e293b] dark:hover:text-[#f8fafc] dark:text-white dark:border-[#1e293b] dark:bg-[#020817] border-[#e2e8f0] border-[1px]">
                                    AI
                                </button>
                                <button className="shadow font-medium text-xs hover:bg-[#f1f5f9] text-black bg-white px-2 lg:px-3 py-2 rounded-md dark:hover:bg-[#1e293b] dark:hover:text-[#f8fafc] dark:text-white dark:border-[#1e293b] dark:bg-[#020817] border-[#e2e8f0] border-[1px]">
                                    DevOps
                                </button>

                                {/* More Categories Dropdown */}
                                <div className="relative group">
                                    <button className="shadow font-medium text-xs flex items-center gap-1 hover:bg-[#f1f5f9] text-black bg-white px-2 lg:px-3 py-2 rounded-md dark:hover:bg-[#1e293b] dark:hover:text-[#f8fafc] dark:text-white dark:border-[#1e293b] dark:bg-[#020817] border-[#e2e8f0] border-[1px]">
                                        More Categories
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-3 h-3 mt-[2px] transition-transform duration-200 group-hover:rotate-180"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </button>

                                    {/* Dropdown Menu */}
                                    <div className="absolute left-[-2%] mt-2 hidden group-hover:flex flex-col bg-white dark:bg-[#0f172a] rounded-md shadow-lg border border-[#e2e8f0] dark:border-[#1e293b] w-40 z-50">
                                        <button className="text-sm text-left px-3 py-2 hover:bg-[#f1f5f9] dark:hover:bg-[#1e293b] dark:text-[#f8fafc]">
                                            Finance
                                        </button>
                                        <button className="text-sm text-left px-3 py-2 hover:bg-[#f1f5f9] dark:hover:bg-[#1e293b] dark:text-[#f8fafc]">
                                            Marketing
                                        </button>
                                        <button className="text-sm text-left px-3 py-2 hover:bg-[#f1f5f9] dark:hover:bg-[#1e293b] dark:text-[#f8fafc]">
                                            Jobs
                                        </button>
                                        <button className="text-sm text-left px-3 py-2 hover:bg-[#f1f5f9] dark:hover:bg-[#1e293b] dark:text-[#f8fafc]">
                                            UI/UX Design
                                        </button>
                                        <button className="text-sm text-left px-3 py-2 hover:bg-[#f1f5f9] dark:hover:bg-[#1e293b] dark:text-[#f8fafc]">
                                            Cloud
                                        </button>
                                        <button className="text-sm text-left px-3 py-2 hover:bg-[#f1f5f9] dark:hover:bg-[#1e293b] dark:text-[#f8fafc]">
                                            Blockchain
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Result Line  */}
                        <p className="pt-8 text-[#64748b]">Showing 9 of 9 articles</p>

                        {/* Featured Articles  */}
                        <div className="w-full flex flex-col pt-10 gap-y-8">
                            <p className="text-2xl font-semibold">Featured Articles</p>
                            <div className="w-full gap-6 flex flex-wrap items-center justify-center">
                                {SampleBlogData.map((ele, index) => {
                                    return (
                                        <BlogCardReuse key={index} index={index} ele={ele} />
                                    );
                                })}
                            </div>
                        </div>

                        {/* All Articles  */}
                        <div className="w-full flex flex-col py-10 gap-y-8">
                            <p className="text-2xl font-semibold">All Articles</p>
                            <div className="w-full flex  gap-y-12 flex-col justify-center items-center">
                                {SampleBlogData.map((ele, index) => {
                                    return (
                                        <BlogFullCardReuse key={index} index={index} ele={ele} />
                                    );
                                })}
                            </div>
                        </div>


                        {/* NewsLetter  */}
                        <div className="w-full dark:border-[#1e293b] dark:bg-[#020818] border-[#e2e8f0] border-[1px] rounded-lg shadow-md mb-20">
                            <div className="py-8 px-4 md:px-0 flex justify-center items-center flex-col gap-y-6">
                                <p className="text-center text-2xl font-semibold ">
                                    Stay Updated
                                </p>
                                <p className="text-[#64748b] md:w-[50%] text-center">
                                    Get the latest articles and development insights delivered to your inbox. No spam, unsubscribe at any time.
                                </p>
                                <div className="flex gap-x-4 w-full justify-center items-center">
                                    <input className="w-full dark:border-[#1e293b] md:w-[50%] text-sm shadow-sm py-2 px-3 bg-transparent rounded-lg border-[#e2e8f0] border-[1px]" placeholder="Enter your email" type="text" />
                                    <button className="py-2 text-sm text-white font-semibold px-3 bg-primary hover:bg-primary/60 rounded-md">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default AllBlogPageComponent;
