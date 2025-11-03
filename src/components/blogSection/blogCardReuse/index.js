import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { Icon } from "@/components"

// --------------------------------------------------------------------------

const BlogCardReuse = ({ ele }) => {

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
                className={`w-full h-[600px] group 
                                    hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)]
                                    dark:hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)]
                                    hover:-translate-y-4 transition-all duration-300 ease-in-out   dark:border-[#1e293b] rounded-xl border-[#e2e8f0] border-[1px] [ sm:h-[400px] ] [ md:w-[340px] md:h-[500px] ] [ lg:w-[300px] lg:h-[600px] ] [ xl:w-[385px] xl:h-[530px] ] [ lapxl:!w-[415px] lapxl:!h-[600px] ] `}
            >
                {/* Image  */}
                <div className="w-full h-[40%] overflow-hidden rounded-t-xl relative xl:h-[50%]">
                    <Image
                        src={ele?.img}
                        width={200}
                        height={300}
                        alt={ele?.alt}
                        className="w-full group-hover:opacity-100 h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />

                    <p className="absolute top-4 text-xs left-4 font-semibold hover:bg-primary/80 bg-transparent text-white rounded-full py-[0.125rem] px-[0.625rem]">
                        {ele?.category}
                    </p>

                    <div className="absolute bottom-4 flex justify-center items-center gap-x-2 right-4">
                        <div className="flex gap-x-2 justify-center items-center text-xs font-semibold dark:text-[#f8fafc] text-white dark:border-[#1e293b] dark:bg-[#020817e6] bg-black/50 rounded-full py-[0.125rem] px-[0.625rem]">
                            <Icon
                                icon={"lsicon:view-outline"}
                                height={15}
                                width={15}
                            />
                            {ele?.view}
                        </div>
                        <div className="flex gap-x-2 justify-center items-center text-xs font-semibold dark:text-[#f8fafc] text-white dark:border-[#1e293b] dark:bg-[#020817e6] bg-black/50 rounded-full py-[0.125rem] px-[0.625rem]">
                            <Icon
                                icon={"weui:like-outlined"}
                                height={15}
                                width={15}
                            />
                            {ele?.like}
                        </div>
                    </div>
                </div>

                {/* Content  */}
                <div className="w-full  rounded-b-xl bg-white p-6 dark:bg-[#020818] flex flex-col justify-between lg:p-8 h-[60%] xl:h-[50%]">
                    <div className="flex gap-x-2 items-center">
                        <Icon
                            className={"font-medium text-[#64748b]"}
                            icon={"iconoir:calendar"}
                        />
                        <p className="font-medium text-[#64748b] text-sm">
                            December 15, 2024
                        </p>
                    </div>
                    <p className="text-xl group-hover:text-primary font-bold">
                        {truncateHeading(ele?.title, 25)}
                    </p>
                    <p
                        className={`leading-relaxed h-[100px] sm:h-[50px] md:h-[80px] lg:h-[100px] xl:h-[80px] text-[#64748b]`}
                    >
                        {truncateDesc(ele?.desc, 85)}
                    </p>
                    <div className="flex gap-x-2 items-center">
                        <Icon
                            className={"text-[#64748b]"}
                            icon={"tabler:clock"}
                        />
                        <p className="text-[#64748b] font-medium text-sm">
                            {ele?.readTime} Read
                        </p>
                    </div>
                    <Link className="w-fit" href={`/all-blogs/${ele?.id}`}>
                        <button className="text-sm text-primary transition-all duration-300 ease-in-out cursor-pointer rounded-full font-semibold flex justify-start items-center gap-x-2 px-2 py-1 w-fit hover:bg-[#f1f5f9] dark:hover:bg-[#1e293b]">
                            Read Article
                            <Icon
                                icon={"mynaui:arrow-right"}
                                width={20}
                                height={20}
                                className={
                                    "group-hover:translate-x-1 transition-all duration-300 ease-in-out"
                                }
                            />
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default BlogCardReuse
