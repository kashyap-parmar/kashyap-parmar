"use client"
import React from 'react'
import { useSafeMediaQuery } from '@/hooks/useSafeMediaQuery';
import Icon from "../../icon"

// ----------------------------------------

const AboutMeSmallCardReuse = ({ ele }) => {

    const coustomXL = useSafeMediaQuery("(min-width:1364px)");

    return (
        <>
            <div className={`flex rounded-xl border-[1px] bg-white dark:bg-[#020817]  dark:border-[#1e293b] w-[270px] items-start md:w-[340px] lg:w-[210px] xl:w-[260px] ${coustomXL && "!w-[300px]"} p-6 gap-x-4`}>
                <div className={`p-2 flex rounded-xl justify-center ${ele?.bgColor} items-center`}>
                    <Icon
                        icon={ele?.icon}
                        className={ele?.color}
                        width={30}
                        height={30}
                    />
                </div>
                <div className='flex flex-col gap-y-2'>
                    <h4 className='font-semibold'>
                        {ele?.heading}
                    </h4>
                    <p className='text-sm text-[#64748b]'>
                        {ele?.desc}
                    </p>
                </div>
            </div>
        </>
    )
}

export default AboutMeSmallCardReuse
