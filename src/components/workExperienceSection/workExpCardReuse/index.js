"use client"
import React from 'react'
import Link from 'next/link';
import { Icon } from "@/components"

// ------------------------------

const WorkExpCardReuse = ({ ele }) => {

    return (
        <>
            <div
                className="flex pl-4 justify-center items-center"
            >
                <div className="flex hover:shadow-2xl relative transition-all duration-300 ease-in-out flex-col w-full lg:w-[900px] dark:hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)] group hover:-translate-y-2 hover:scale-[1.02] gap-y-6 justify-center items-start p-8 border-[#e2e8f0] border-[1px] rounded-xl bg-white dark:border-[#1e293b] dark:bg-[#020817]">
                    {/* Dot  */}
                    <div
                        className={`absolute flex justify-center items-center md:left-[-8%] sm:left-[-10%] left-[-21%] lg:left-[-9%] xl:left-[-11%] lapxl:!left-[-11%] group-hover:scale-0 top-0 border-[4px] border-[#8B5CF6]/20 w-4 h-4 rounded-full`}
                    >
                        <span className="rounded-full  w-2 h-2 bg-[#3B82F6]"></span>
                    </div>
                    <div className="w-full flex-col lg:flex-row gap-y-4 lg:gap-y-0 flex lg:items-center items-start justify-between">
                        <div className="flex flex-col gap-y-2 w-fit">
                            <p className="text-2xl font-bold">
                                {ele?.designation}
                            </p>
                            <Link
                                href={ele?.companyUrl || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='flex items-center gap-2 text-primary'
                            >
                                <p className=" font-semibold text-lg">
                                    {ele?.companyName}
                                </p>
                                <Icon
                                    icon={"lucide:external-link"}
                                    height={16}
                                    width={16}
                                />
                            </Link>
                        </div>
                        <div className="font-semibold text-primary border-primary/20 bg-primary/10 text-xs rounded-md px-4 py-2 border-[1px]">
                            <p>
                                {ele?.startYear} - {ele?.endYear || "Present"}
                            </p>
                        </div>
                    </div>
                    <div>
                        <p className="text-[#64748b] text-justify leading-relaxed text-base">
                            {ele?.desc}
                        </p>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <p className="font-semibold text-sm uppercase tracking-wide">
                            Key Achievements
                        </p>
                        {ele?.keyAchievements.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="flex text-justify items-start text-[#64748b] gap-x-4 lg:gap-x-2 lg:items-center"
                                >
                                    <Icon
                                        icon={"lets-icons:check-ring-round"}
                                        width={20}
                                        height={20}
                                        className={"text-green-500"}
                                    />
                                    {item}
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex flex-wrap gap-6">
                        {ele?.skillsFromExp.map((item, index) => {
                            return (
                                <p
                                    key={index}
                                    className="px-2.5 py-0.5 font-medium text-xs rounded-full dark:text-[#f8fafc] dark:bg-[#1e293b] bg-[#f1f5f9] text-[#020817]"
                                >
                                    {item}
                                </p>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkExpCardReuse
