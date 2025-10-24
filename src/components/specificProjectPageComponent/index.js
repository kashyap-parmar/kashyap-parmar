"use client";
import Image from 'next/image';
import { useSafeMediaQuery } from '@/hooks/useSafeMediaQuery';
import { CustomNavbarBlog, Icon, ProjectSectionCard } from '@/components';
import { SampleProjectsData } from '@/mock/data';

// --------------------------------------------

const SpecificProjectPageComponent = ({ project }) => {
    const coustomXL = useSafeMediaQuery("(min-width:1364px)");

    return (
        <div className='w-full h-full dark:bg-[#020817]'>
            {/* Navbar  */}
            <CustomNavbarBlog
                subTitleBtn={"Projects"}
                path={"/projects"}
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
                                    <ProjectSectionCard ele={ele} key={index} />
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>

        </div >
    )
}

export default SpecificProjectPageComponent
