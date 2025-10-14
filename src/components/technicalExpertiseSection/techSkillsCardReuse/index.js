"use client"
import React from 'react'
import Icon from "../../icon"
import { useSafeMediaQuery } from '@/hooks/useSafeMediaQuery';

// ---------------------------------------------

const TechSkillsCardReuse = ({ ele }) => {

    const coustomXL = useSafeMediaQuery("(min-width:1364px)");

    return (
        <>
            <div
                className="flex w-full flex-col justify-center items-center gap-y-8"
            >
                <p className="text-2xl font-bold capitalize text-center">
                    {ele?.title}
                </p>

                <div className="w-full flex flex-wrap justify-center gap-6 lg:gap-4 xl:gap-6">
                    {ele?.data.map((item, i) => (
                        <div
                            key={i}
                            className={`w-full ${coustomXL && "!w-[415px]"
                                } xl:w-[389px] sm:w-[275px] md:w-[340px] lg:w-[309px]
                                             flex justify-between items-center gap-x-4
                                             bg-white dark:bg-[#02081780] border border-[#e2e8f0] dark:border-[#1e293b]
                                             rounded-xl p-4 xl:p-6 shadow-sm
                                             dark:shadow-[0_0_0_1px_rgba(255,255,255,0.1),_0_2px_4px_rgba(0,0,0,0.3),_0_8px_16px_rgba(0,0,0,0.3)]
                                             transition-all ease-in-out duration-300
                                             hover:-translate-y-2 hover:scale-[1.02]
                                             hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)]
                                             dark:hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)]
                                             group`}
                        >
                            <div className="flex justify-center items-center gap-x-2 md:gap-x-4">
                                <div className="p-2 bg-blue-500/10 rounded-xl flex justify-center items-center group-hover:bg-primary transition-all duration-300">
                                    <Icon
                                        icon={item?.icon}
                                        height={30}
                                        width={30}
                                        className="group-hover:text-white text-[#2563eb]"
                                    />
                                </div>
                                <div className="flex flex-col gap-y-1">
                                    <p className="font-semibold text-lg">
                                        {item?.heading}
                                    </p>
                                    <p className="text-sm hidden md:flex text-[#64748b] capitalize">
                                        {item?.type}
                                    </p>
                                </div>
                            </div>

                            <p className="text-xs group-hover:bg-primary group-hover:text-white transition-all duration-300 rounded-full py-[0.125rem] px-[0.625rem] dark:text-white dark:bg-[#1e293b] bg-[#f1f5f9]">
                                {item?.level}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default TechSkillsCardReuse
