"use client"
import { useSafeMediaQuery } from '@/hooks/useSafeMediaQuery';
import Image from 'next/image';
import React from 'react'
import Icon from "../../icon"
import Link from 'next/link';

// --------------------------------------

const ProjectSectionCard = ({ ele }) => {

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
            <div
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
        </>
    )
}

export default ProjectSectionCard
