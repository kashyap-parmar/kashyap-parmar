"use client"
import React from 'react'
import Link from "next/link";
import { Icon } from "@/components";

// ------------------------------------------

const CustomNavbarBlog = ({ path, subTitleBtn, isBlog, github, liveDemo }) => {

    return (
        <>
            <div className="w-full sticky top-0 z-[10000] flex justify-center items-center h-[70px] border-b-[1px] dark:border-[#1e293b] border-[#e2e8f0] backdrop-blur-md">
                <div
                    className={`max-w-[1300px] h-full w-full gap-x-2 flex justify-between items-center lapxl:px-0 px-8`}
                >
                    <Link className="w-fit" href={path}>
                        <button className="flex dark:hover:bg-[#1e293b] dark:text-[#f8fafc] gap-x-4 rounded-md text-xs px-3 py-2 font-medium hover:text-[#020817] hover:bg-[#f1f5f9] justify-center items-center">
                            <Icon icon={"solar:arrow-left-outline"} />
                            Back to {subTitleBtn}
                        </button>
                    </Link>
                    <div className='flex gap-x-4 justify-center items-start'>
                        {
                            isBlog ? (
                                <>
                                    <button className='flex dark:hover:text-[#f8fafc] dark:hover:bg-[#1e293b] dark:bg-[#020817] dark:border-[#1e293b] rounded-lg shadow-sm  border-[#e2e8f0] border-[1px] font-medium text-xs px-3 py-1 hover:text-[#020817] hover:bg-[#f1f5f9] cursor-pointer bg-white justify-center items-center gap-x-2'>
                                        <Icon
                                            icon={"material-symbols:share-outline"}
                                        />
                                        Share
                                    </button>
                                    <button className='flex dark:hover:text-[#f8fafc] dark:hover:bg-[#1e293b] dark:bg-[#020817] dark:border-[#1e293b] rounded-lg shadow-sm  border-[#e2e8f0] border-[1px] font-medium text-xs px-3 py-1 hover:text-[#020817] hover:bg-[#f1f5f9] cursor-pointer bg-white justify-center items-center gap-x-2'>
                                        <Icon
                                            icon={"material-symbols:bookmark-outline"}
                                            height={15}
                                            width={15}
                                        />
                                        Save
                                    </button>
                                </>
                            ) : (
                                <div>
                                    {github &&
                                        <button
                                            className='flex dark:hover:text-[#f8fafc] dark:hover:bg-[#1e293b] dark:bg-[#020817] dark:border-[#1e293b] rounded-lg shadow-sm  border-[#e2e8f0] border-[1px] font-medium text-xs px-3 py-2 hover:text-[#020817] hover:bg-[#f1f5f9] cursor-pointer bg-white justify-center items-center gap-x-2'
                                        >
                                            <Icon
                                                icon={"mingcute:github-line"}
                                            />
                                            View Code
                                        </button>}
                                    {liveDemo &&
                                        <button
                                            className='flex dark:hover:text-[#f8fafc] dark:hover:bg-[#1e293b] dark:bg-[#020817] dark:border-[#1e293b] rounded-lg shadow-sm  border-[#e2e8f0] border-[1px] font-medium text-xs px-3 py-2 hover:text-[#020817] hover:bg-[#f1f5f9] cursor-pointer text-white bg-primary justify-center items-center gap-x-2'
                                        >
                                            <Icon
                                                icon={"lucide:external-link"}
                                                height={15}
                                                width={15}
                                            />
                                            Live Demo
                                        </button>}
                                </div>
                            )
                        }

                    </div>
                </div>
            </div >
        </>
    )
}

export default CustomNavbarBlog
