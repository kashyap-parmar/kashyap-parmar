"use client"
import React from 'react'
import Icon from '../icon';
import {
    aboutMeBigCard,
    aboutMeSmallCard
} from '@/mock/data';
import { useSafeMediaQuery } from '@/hooks/useSafeMediaQuery';
import AboutMeBigCardReuse from './aboutMeBigCardReuse';
import AboutMeSmallCardReuse from './aboutMeSmallCardReuse';
import Link from 'next/link';

// ----------------------------------------------

const AboutMeSection = () => {

    const coustomXL = useSafeMediaQuery("(min-width:1364px)");

    return (
        <>
            <div id='about' className='py-28 w-full flex justify-center dark:bg-[#040B1C] section-bg items-center'>
                <div className={`max-w-[1300px] w-full flex-col gap-y-16 flex justify-center items-center ${coustomXL ? "px-0" : "px-8"}`}>

                    <div className='w-full flex flex-col justify-center items-center gap-y-12'>

                        <div className='w-full flex gap-y-6 justify-center items-center flex-col'>

                            <div className='text-primary py-2 px-4 w-fit rounded-full bg-primary/10 border border-primary/20 text-sm font-medium flex gap-2 items-center'>
                                <Icon icon={"ic:baseline-people-alt"} />
                                <p>
                                    About me
                                </p>
                            </div>

                            <div className='flex flex-col justify-center items-center gap-y-6'>
                                <p className='text-4xl text-center lg:text-5xl font-bold'>
                                    Passionate
                                    <span className='text-gradient pl-2'>
                                        Full-Stack Developer
                                    </span>
                                </p>
                                <p className='text-xl text-[#64748b] text-center max-w-3xl leading-relaxed'>
                                    With expertise in modern web technologies and a passion for creating exceptional digital experiences

                                </p>
                            </div>
                        </div>


                        <div className={`flex w-full flex-wrap justify-center ${coustomXL && "!gap-8"} gap-6 md:gap-8`}>
                            {
                                aboutMeBigCard.map((ele, index) => {
                                    return (
                                        <AboutMeBigCardReuse key={index} ele={ele} />
                                    )
                                })
                            }
                        </div>

                    </div>

                    <div className='w-full flex flex-col lg:flex-row items-center gap-y-12 lg:justify-between'>

                        <div className='w-full lg:w-[48%] gap-y-6 flex flex-col'>
                            <p className='text-2xl font-bold'>
                                Building Digital Excellence
                            </p>
                            <p className='text-lg text-[#64748b] leading-relaxed'>
                                I specialize in creating dynamic, scalable web applications using the MERN stack. My passion lies in solving complex problems through clean, efficient code and delivering exceptional user experiences.
                            </p>
                            <p className='text-lg text-[#64748b] leading-relaxed'>
                                From concept to deployment, I ensure every project meets the highest standards of quality and performance. My approach combines technical expertise with creative problem-solving to bring your vision to life.
                            </p>
                            <div className='flex flex-col md:flex-row gap-y-4 md:gap-x-4 pt-2'>
                                <button className='flex dark:hover:bg-[#1e293b] border-[#e2e8f0] dark:bg-[#020817] dark:border-[#1e293b]  hover:bg-[#f1f5f9] rounded-full shadow-sm border-[1px] justify-center font-medium text-sm py-2 px-4 items-center gap-x-2'>
                                    <Icon
                                        icon={"material-symbols:download-rounded"}
                                        width={20}
                                        height={20}
                                    />
                                    <p className='text-[#020817] dark:text-white'>Download Resume</p>
                                </button>
                                <Link href={"/#contact"}>
                                    <button className='flex dark:hover:bg-[#1e293b] hover:border-[#e2e8f0] hover:bg-[#f1f5f9] rounded-full justify-center font-medium text-sm py-2 px-4 items-center gap-x-2'>
                                        <Icon
                                            icon={"proicons:chat"}
                                            width={20}
                                            height={20}
                                        />
                                        <p className='text-[#020817] dark:text-white'>Let&apos;s Chat</p>
                                    </button>
                                </Link>

                            </div>
                        </div>

                        {/* Lower Section Right */}
                        <div className='w-full lg:w-[48%] justify-center flex flex-wrap gap-6'>
                            {
                                aboutMeSmallCard.map((ele, index) => {
                                    return (
                                        <AboutMeSmallCardReuse ele={ele} key={index} />
                                    )
                                })
                            }

                        </div>

                    </div>

                </div>
            </div >
        </>
    )
}

export default AboutMeSection
