"use client"
import React from 'react'
import Image from 'next/image';
import { CustomNavbarBlog, Icon, BlogFullCardReuse } from '@/components';
import { SampleBlogData } from '@/mock/data';

// --------------------------------------------

const SpecificBlogPageComponent = ({ blog }) => {
    return (
        <>
            <div className='w-full h-full dark:bg-[#020817]'>

                <CustomNavbarBlog
                    path={"/all-blogs"}
                    subTitleBtn="Blogs"
                    isBlog={true} />

                <div className='w-full flex flex-col justify-center items-center'>
                    <div className="max-w-[900px] w-full flex flex-col justify-center items-center px-8 lg:px-0">

                        {/* Upper Heading Section  */}
                        <div className='flex flex-col pt-20 pb-10 w-full border-[#e2e8f0] border-b-[1px] gap-y-8'>

                            {/* Category & Tags  */}
                            <div className='flex flex-col sm:flex-row gap-4'>
                                {/* Category  */}
                                <div className='flex h-fit w-fit dark:border-[#1e293b] justify-center font-semibold border-[#e2e8f0] border-[1px] items-center rounded-md py-0.5 px-2.5 text-xs'>
                                    {blog.category}
                                </div>
                                <div className='flex flex-wrap gap-4'>
                                    {
                                        blog.language.map((ele, index) => {
                                            return (
                                                <p key={index} className='flex justify-center font-semibold dark:text-[#f8fafc] dark:bg-[#1e293b] bg-[#f1f5f9] items-center rounded-md py-0.5 px-2.5 text-xs'>
                                                    {ele}
                                                </p>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                            {/* Heading  */}
                            <p className='text-4xl md:text-5xl font-bold'>
                                {blog?.title}
                            </p>

                            {/* Desc  */}
                            <p className='text-xl text-[#64748b]'>
                                {blog?.desc}
                            </p>

                            {/* Author Name And like  */}
                            <div className='flex w-full flex-col md:flex-row gap-y-4 md:gap-y-0 justify-between items-start md:items-center'>
                                <div className='flex flex-col gap-y-4 sm:gap-y-0 items-start  sm:flex-row gap-x-4'>
                                    <div className='flex text-[#64748b] text-sm justify-center items-center gap-x-2'>
                                        <Icon
                                            icon={"mi:user"}
                                            className={"text-[#64748b]"}
                                        />
                                        {blog?.BlogAuthor}
                                    </div>
                                    <div className='flex text-[#64748b] text-sm justify-center items-center gap-x-2'>
                                        <Icon
                                            icon={"iconoir:calendar"}
                                            className={"text-[#64748b]"}
                                        />
                                        {blog?.uploadDate}
                                    </div>
                                    <div className='flex text-[#64748b] text-sm justify-center items-center gap-x-2'>
                                        <Icon
                                            icon={"mingcute:time-line"}
                                            className={"text-[#64748b]"}
                                        />
                                        {blog?.readTime} Read
                                    </div>
                                </div>
                                <div className='flex gap-x-4'>
                                    <p className='text-[#64788b] text-sm' >{blog?.view} Views</p>
                                    <p className='text-[#64788b] text-sm' >{blog?.like} Likes</p>
                                </div>
                            </div>

                        </div>

                        {/* Main Image Section  */}
                        <div className='py-10 w-full'>
                            <div className='w-full flex justify-center items-center h-[500px]'>
                                <Image
                                    src={blog?.img}
                                    alt={blog?.alt}
                                    width={300}
                                    height={300}
                                    className='w-full rounded-xl h-full object-cover'
                                />
                            </div>
                        </div>

                        {/* Admin Be Content  */}
                        <div className='py-10 min-h-screen'>
                            Admin Content
                        </div>

                        {/* Author Card  */}
                        <div className='w-full pt-20'>
                            <div className='p-6 gap-x-6 flex-col sm:flex-row gap-y-6 sm:gap-y-0 dark:text-[#f8fafc] dark:bg-[#020817] w-full dark:border-[#1e293b] border-[#e2e8f0] bg-white rounded-xl shadow-lg border-[1px] flex justify-center items-center'>
                                <div className='w-fit'>
                                    <div className='w-16 h-16 rounded-full bg-primary/10 flex  justify-center items-center'>
                                        <Icon
                                            icon={"ph:user"}
                                            className={"text-primary"}
                                            height={30}
                                            width={30}
                                        />
                                    </div>
                                </div>
                                <div className='flex items-center sm:items-start flex-col gap-y-2'>
                                    <p className='text-lg font-semibold'>
                                        {blog?.BlogAuthor}
                                    </p>
                                    <p className='text-[#64748b]'>
                                        MERN stack developer with 3+ years of experience building scalable web applications. Passionate about sharing knowledge and helping other developers grow.
                                    </p>
                                    <div className='flex pt-2 gap-x-4'>
                                        <button className='flex dark:border-[#1e293b]  hover:bg-[#f1f5f9] border-[#e2e8f0] dark:hover:bg-[#1e293b] border-[1px] rounded-md shadow-sm font-medium gap-x-2 cursor-pointer justify-center items-center px-3 py-1 text-sm'>
                                            <Icon
                                                height={18}
                                                width={18}
                                                icon={"mingcute:github-line"}
                                            />
                                            Github
                                        </button>
                                        <button className='flex dark:border-[#1e293b] dark:hover:bg-[#1e293b] hover:bg-[#f1f5f9] border-[#e2e8f0] border-[1px] rounded-md shadow-sm font-medium gap-x-2 cursor-pointer justify-center items-center px-3 py-1 text-sm'>
                                            <Icon
                                                height={18}
                                                width={18}
                                                icon={"ci:link-break"}
                                            />
                                            Portfolio
                                        </button>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Related Blogs */}
                    <div className='py-10'>
                        <div
                            className={`max-w-[1300px] h-full flex-col w-full gap-x-4 flex justify-center items-start lapxl:px-0 px-8`}
                        >
                            <div className="w-full flex flex-col pt-10 gap-y-8">
                                <p className="text-2xl font-semibold">Related Blogs</p>
                                <div className="w-full gap-6 flex flex-wrap items-center justify-center">
                                    {SampleBlogData.map((ele, index) => {
                                        return (
                                            <BlogFullCardReuse
                                                key={index}
                                                ele={ele}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SpecificBlogPageComponent
