"use client"
import React from "react";
import Icon from "../../icon";
import Image from "next/image";
import Link from "next/link";

// ---------------------------------------

const BlogFullCardReuse = ({ ele }) => {

    return (
        <>
            <div
                className="w-full flex-col md:flex-row min-h-[300px] group hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)] dark:hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)] hover:-translate-y-2 transition-all duration-300 ease-in-out dark:border-[#1e293b] dark:bg-[#020818] flex rounded-xl shadow-md border-[1px] border-[#e2e8f0]"
            >
                <div className="w-full md:w-[40%] overflow-hidden rounded-t-xl md:rounded-tr-none md:rounded-l-xl relative">

                    <Image
                        alt={ele?.alt}
                        src={ele?.img}
                        width={300}
                        height={300}
                        className="w-full group-hover:opacity-100 h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                    <p className="absolute bg-primary/80 text-xs rounded-full px-2 py-1 text-white top-4 left-[4%]">
                        {ele?.category}
                    </p>
                </div>

                <div className="py-6 pr-6 pl-8 gap-y-4 flex h-full flex-col w-full">
                    <div className="flex lg:flex-row lg:items-center items-start gap-y-2 lg:gap-y-0 flex-col justify-start gap-x-2">
                        <div className="flex justify-center items-center gap-x-2">
                            <Icon className={"text-[#64748b]"} icon={"mi:user"} />
                            <p className="text-[#64748b] font-medium text-sm">
                                {ele?.BlogAuthor}
                            </p>
                        </div>
                        <span className="w-1 h-1 hidden lg:block rounded-full bg-[#64748b]"></span>
                        <div className="flex justify-center items-center gap-x-2">
                            <Icon className={"text-[#64748b]"} icon={"iconoir:calendar"} />
                            <p className="text-[#64748b] font-medium text-sm">
                                {ele?.uploadDate}
                            </p>
                        </div>
                        <span className="w-1 h-1 hidden lg:block rounded-full bg-[#64748b]"></span>
                        <div className="flex justify-center items-center gap-x-2">
                            <Icon className={"text-[#64748b]"} icon={"tabler:clock"} />
                            <p className="text-[#64748b] font-medium text-sm">
                                {ele?.readTime} Read
                            </p>
                        </div>
                    </div>

                    <p className="text-2xl font-semibold group-hover:text-primary transition-colors">
                        {ele?.title}
                    </p>

                    <p className="text-[#64748b] line-clamp-3">{ele?.desc}</p>

                    <div className="w-full flex flex-wrap gap-2 lg:gap-4">
                        {ele?.tags.map((item, index) => {
                            return (
                                <p
                                    key={index}
                                    className="px-2.5 h-fit py-0.5 text-[#020817] font-medium rounded-xl text-xs bg-[#f1f5f9] dark:text-[#f8fafc] dark:bg-[#1e293b]"
                                >
                                    {item}
                                </p>
                            );
                        })}
                    </div>

                    <Link className="w-fit" href={`/all-blogs/${ele?.id}`}>
                        <button className="text-xs cursor-pointer w-fit rounded-lg bg-white font-medium shadow-sm border-[1px] hover:bg-[#f1f5f9] dark:border-[#1e293b] dark:bg-transparent dark:hover:bg-[#1e293b] border-[#e2e8f0] px-3 py-2">
                            Read Full Article
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default BlogFullCardReuse;
