"use client"
import React, { useState } from 'react'
import CustomNavbarBlog from '../customNavbarBlog'
import { useSafeMediaQuery } from '@/hooks/useSafeMediaQuery';
import Icon from '../icon';
import { SampleProjectsData } from '@/mock/data';
import Link from 'next/link';
import Image from 'next/image';

// --------------------------------------------

const SpecificProjectPageComponent = ({ project }) => {

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

            <div className='w-full h-full dark:bg-[#020817]'>

                {/* Navbar  */}
                <CustomNavbarBlog
                    subTitleBtn={"Projects"}
                    path={"/all-projects"}
                    isBlog={false} />

                <div className='w-full flex justify-center items-center py-10'>
                    <div className={`max-w-[1300px] gap-y-12 flex-col ${coustomXL ? "px-0" : "px-8"}  w-full h-full flex items-start justify-between`}>

                        {/* Main Upper Section  */}
                        <div className='relative flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 justify-between items-start w-full'>
                            {/* Left Part */}
                            <div className='flex flex-col gap-y-8 w-full lg:w-[68%]'>

                                {/* Images Section */}
                                <div className="w-full h-[400px] flex justify-center items-center">
                                    <Image
                                        alt='...'
                                        width={300}
                                        height={300}
                                        src={project?.image}
                                        className='w-full h-full rounded-lg object-cover'
                                    />
                                </div>

                                {/* About Project Section  */}
                                <div className='flex flex-col gap-y-4'>
                                    <p className='text-2xl font-semibold mb-4'>
                                        About This Project
                                    </p>
                                    <p className='text-[#64748b] leading-relaxed'>
                                        This e-commerce platform represents a complete solution for modern online retail businesses. Built from the ground up using the MERN stack, it demonstrates proficiency in full-stack development, database design, and user experience optimization.
                                    </p>
                                    <p className='text-[#64748b] leading-relaxed'>
                                        The application features a sophisticated user authentication system with JWT tokens, secure password hashing, and role-based access control. The frontend provides an intuitive shopping experience with advanced filtering, search functionality, and a streamlined checkout process.
                                    </p>
                                    <p className='text-[#64748b] leading-relaxed'>
                                        The application features a sophisticated user authentication system with JWT tokens, secure password hashing, and role-based access control. The frontend provides an intuitive shopping experience with advanced filtering, search functionality, and a streamlined checkout process.
                                    </p>
                                    <p className='text-[#64748b] leading-relaxed'>
                                        The admin dashboard offers comprehensive tools for inventory management, order processing, customer management, and sales analytics. Real-time updates ensure that inventory levels are always accurate across all user sessions.
                                    </p>
                                    <p className='text-[#64748b] leading-relaxed'>
                                        Payment processing is handled through Stripe integration, providing secure and reliable transaction processing with support for multiple payment methods and currencies.
                                    </p>
                                </div>

                                {/* Key Features */}
                                <div className='flex w-full flex-col gap-y-4'>
                                    <p className='text-2xl font-semibold mb-4'>
                                        Key Features
                                    </p>
                                    <div className='w-full flex flex-wrap gap-4 sm:gap-6'>
                                        {
                                            project?.keyFeatures.map((item, index) => {
                                                return (
                                                    <div key={index} className='flex text-[#64748b] justify-center items-center gap-x-4 sm:gap-x-2'>
                                                        <Icon
                                                            icon={"simple-icons:circle"}
                                                            className={"text-primary"} />
                                                        {item}
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>

                                {/* Technical Challenges & Solutions Section  */}
                                <div className='flex w-full flex-col gap-y-4'>
                                    <p className='text-2xl font-semibold mb-4'>
                                        Technical Challenges & Solutions
                                    </p>
                                    <div className='w-full flex flex-col gap-y-4'>
                                        {
                                            project.challengeSolutions.map((ele, index) => {
                                                return (
                                                    <div key={index} className='flex dark:border-[#1e293b] rounded-lg flex-col shadow-sm border-[1px] border-[#e2e8f0] w-full p-6 gap-y-2'>
                                                        <p className='text-lg font-semibold'>
                                                            {ele?.title}
                                                        </p>
                                                        <p className='text-[#64748b]'>
                                                            {ele?.desc}
                                                        </p>
                                                    </div>
                                                )
                                            })
                                        }

                                    </div>
                                </div>

                            </div>

                            {/* Right Section  */}
                            <div className='w-full lg:w-[30%] sticky flex flex-col gap-y-8 top-24'>

                                {/* Project Details  */}
                                <div className='p-6 flex flex-col dark:border-[#1e293b] items-start gap-y-4 rounded-lg border-[#e2e8f0] border-[1px]'>
                                    <p className='text-lg font-semibold'>
                                        Project Details
                                    </p>
                                    <div className='flex flex-col justify-center items-start gap-y-6'>
                                        <div className='flex justify-center items-center gap-x-4'>
                                            <Icon
                                                icon={"iconoir:calendar"}
                                                className={"text-[#64748b]"} />
                                            <div className='flex flex-col gap-y-1'>
                                                <p className='text-sm font-medium'>
                                                    Completed
                                                </p>
                                                <p className='text-sm text-[#64748b]'>
                                                    December 2024
                                                </p>
                                            </div>
                                        </div>
                                        <div className='flex justify-center items-center gap-x-4'>
                                            <Icon
                                                icon={"ep:user"}
                                                className={"text-[#64748b]"} />
                                            <div className='flex flex-col gap-y-1'>
                                                <p className='text-sm font-medium'>
                                                    Client
                                                </p>
                                                <p className='text-sm text-[#64748b]'>
                                                    TechCorp Solutions
                                                </p>
                                            </div>
                                        </div>
                                        <div className='flex justify-center items-center gap-x-4'>
                                            <Icon
                                                icon={"tabler:tag"}
                                                className={"text-[#64748b]"} />
                                            <div className='flex flex-col gap-y-1'>
                                                <p className='text-sm font-medium'>
                                                    Category
                                                </p>
                                                <p className='text-sm text-[#64748b]'>
                                                    Full  Stack
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Technologies Used */}
                                <div className='p-6 w-full dark:border-[#1e293b] flex flex-col items-start gap-y-4 rounded-lg border-[#e2e8f0] border-[1px]'>
                                    <p className='text-lg font-semibold'>
                                        Technologies Used
                                    </p>
                                    <div className='flex flex-wrap gap-4'>
                                        {
                                            project?.tech.map((ele, index) => {
                                                return (
                                                    <p key={index} className='dark:bg-[#1e293b] rounded-full font-semibold text-xs py-0.5 px-[0.625rem] bg-[#f1f5f9]'>
                                                        {ele}
                                                    </p>
                                                )
                                            })
                                        }
                                    </div>

                                </div>

                                {/* Github and Live  */}
                                <div className='w-full flex flex-col gap-y-4'>
                                    <button className='w-full font-medium border-[1px] border-primary text-white bg-primary hover:bg-[#2563ebe6] rounded-lg flex justify-center items-center gap-x-4 py-2'>
                                        <Icon
                                            icon={"mage:external-link"}
                                            className={"text-white"} />
                                        View Live Project
                                    </button>
                                    <button className='w-full dark:bg-[#020817] dark:hover:bg-[#1e293b] dark:border-[#1e293b] dark:text-white hover:bg-[#f1f5f9] font-medium text-black bg-white rounded-lg flex justify-center items-center gap-x-4 py-2 shadow-sm border-[#e2e8f0] border-[1px]'>
                                        <Icon
                                            icon={"mingcute:github-line"}
                                            className={"text-black dark:text-white"} />
                                        View Source Code
                                    </button>
                                </div>

                                {/* Interest  */}
                                <div className='w-full dark:border-[#1e293b] border-[1px] shadow-sm border-[#e2e8f0] rounded-lg flex-col gap-y-4 flex justify-center items-center p-4'>
                                    <p className='text-lg font-semibold'>
                                        Interested in Similar Work?
                                    </p>
                                    <p className='text-sm  text-center text-[#64748b] mb-4'>
                                        Let&apos;s discuss your project and create something amazing together.
                                    </p>
                                    <button className='shadow-sm  dark:bg-[#020817] dark:hover:bg-[#1e293b] dark:border-[#1e293b] dark:text-white hover:bg-[#f1f5f9] font-medium text-xs px-3 py-2 border-[1px] rounded-lg border-[#e2e8f0]'>
                                        Get in touch
                                    </button>
                                </div>

                            </div>

                        </div>

                        <div className='w-full flex gap-y-8 flex-col'>
                            <p className='text-2xl font-semibold mb-4'>
                                More Projects
                            </p>
                            <div className="w-full gap-6 flex flex-wrap items-center justify-center">
                                {SampleProjectsData.map((ele, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className={`w-full h-[600px] group hover:-translate-y-4 transition-all duration-300 ease-in-out   dark:border-[#1e293b]  rounded-xl border-[#e2e8f0] border-[1px] [ sm:h-[400px] ] [ md:w-[340px] md:h-[500px] ] [ lg:w-[300px] lg:h-[600px] ] [ xl:w-[385px] xl:h-[530px] ] [ ${coustomXL && "!w-[415px] !h-[600px]"} ] `}
                                        >
                                            {/* Image  */}
                                            <div className="w-full h-[40%] overflow-hidden rounded-t-xl relative xl:h-[50%]">
                                                <Image
                                                    src={ele?.image}
                                                    width={200}
                                                    height={300}
                                                    alt={ele?.alt}
                                                    className="w-full group-hover:opacity-100 h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                                />
                                                {ele?.featured && (
                                                    <p className="absolute top-4 text-xs left-4 font-semibold shadow bg-transparent text-white rounded-full py-[0.125rem] px-[0.625rem]">
                                                        Featured
                                                    </p>
                                                )}

                                                {ele?.category && (
                                                    <p className="absolute top-4 text-xs right-4 font-semibold dark:text-[#f8fafc] dark:border-[#1e293b] dark:bg-[#020817e6] bg-white rounded-full py-[0.125rem] px-[0.625rem]">
                                                        {ele?.category}
                                                    </p>
                                                )}

                                                <div className="absolute inset-0 justify-center items-center flex gap-x-4 ">
                                                    {ele?.github && (
                                                        <button className="font-medium hover:bg-[#f1f5f9cc] cursor-pointer shadow-sm text-xs px-3 py-2 text-[#020817] justify-center items-center bg-white rounded-full gap-x-4 hidden group-hover:flex dark:bg-[#1e293b] dark:hover:bg-[#1e293bcc] dark:text-white">
                                                            <Icon
                                                                icon={"line-md:github"}
                                                                height={18}
                                                                width={18}
                                                            />
                                                            Code
                                                        </button>
                                                    )}

                                                    {ele?.live && (
                                                        <button className="group-hover:flex hidden font-medium cursor-pointer shadow-sm text-xs px-3 py-2 text-white justify-center items-center bg-primary rounded-full gap-x-4">
                                                            <Icon
                                                                icon={"lucide:external-link"}
                                                                height={18}
                                                                width={18}
                                                            />
                                                            Live
                                                        </button>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Content  */}
                                            <div className="w-full  rounded-b-xl bg-white p-6 dark:bg-[#020818] flex flex-col justify-between lg:p-8 h-[60%] xl:h-[50%]">
                                                <p className="text-xl group-hover:text-primary font-bold">
                                                    {truncateHeading(ele?.title, 25)}
                                                </p>
                                                <p
                                                    className={`leading-relaxed h-[100px] sm:h-[50px] md:h-[80px] lg:h-[100px] xl:h-[80px] text-[#64748b]`}
                                                >
                                                    {truncateDesc(ele?.description, 85)}
                                                </p>
                                                <div className="w-full flex flex-wrap gap-2 lg:gap-4">
                                                    {ele?.tech.slice(0, 3).map((item, index) => (
                                                        <p
                                                            key={index}
                                                            className="px-2.5 h-fit py-0.5 text-[#020817] font-medium rounded-xl text-xs bg-[#f1f5f9] dark:text-[#f8fafc] dark:bg-[#1e293b]"
                                                        >
                                                            {item}
                                                        </p>
                                                    ))}

                                                    {ele?.tech.length > 3 && (
                                                        <p className="px-2.5 h-fit py-0.5 text-[#020817] font-medium rounded-xl text-xs bg-[#f1f5f9] dark:text-[#f8fafc] dark:bg-[#1e293b]">
                                                            +{ele.tech.length - 3} more
                                                        </p>
                                                    )}
                                                </div>

                                                <Link href={`/all-projects/${ele?.id}`}>
                                                    <button className="w-full text-sm group-hover:bg-[#2563eb] group-hover:text-white transition-all duration-300 ease-in-out cursor-pointer rounded-full py-2 px-4 bg-white border-[1px] border-[#e2e8f0] flex justify-center items-center gap-x-4 dark:bg-[#020817] dark:border-[#1e293b] dark:text-white dark:hover:bg-[#1e293b]">
                                                        View Details
                                                        <Icon
                                                            icon={"mynaui:arrow-right"}
                                                            width={20}
                                                            height={20}
                                                        />
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                    </div>
                </div>

            </div >

        </>
    )
}

export default SpecificProjectPageComponent
