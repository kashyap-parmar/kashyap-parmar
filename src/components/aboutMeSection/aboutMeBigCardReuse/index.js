"use client";
import React from 'react'
import Icon from "../../icon"

// ------------------------------------

const AboutMeBigCardReuse = ({ ele }) => {

    return (
        <>
            <div

                className={`bg-white dark:bg-[#020817] border border-gray-200 dark:border-[#1e293b]
              flex flex-col justify-center items-center rounded-xl p-8
              shadow transition-all duration-300 ease-in-out
              hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]
              w-[250px] h-[250px] sm:h-[215px] sm:w-[270px] md:w-[300px] lg:w-[210px] xl:w-[280px]
              lapxl:!w-[300px] lapxl:!h-[215px]`}
            >

                <div className='w-[64px] flex justify-center items-center h-[64px]'>
                    <Icon
                        icon={ele?.icon}
                        color={ele.color}
                        className={"pb-4"}
                        height={30}
                        width={30}
                    />
                </div>
                <p className='text-3xl dark:text-white font-bold mb-2'>
                    {ele?.heading}
                </p>
                <p className='text-[#64748b] text-center font-medium'>
                    {ele?.desc}
                </p>
            </div>
        </>
    )
}

export default AboutMeBigCardReuse
