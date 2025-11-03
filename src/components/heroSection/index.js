"use client"
import Link from 'next/link';
import React from 'react';
import { motion } from "framer-motion";
import { Icon } from '@/components';
import { techIconsHeroSection } from '@/mock/data';

// ------------------------------------------------------

const HeroSection = () => {
    return (
        <div
            id='hero'
            className='py-20 flex items-center justify-center w-full hero-bg lg:pt-26'
        >
            <div className={`max-w-[1300px] lg:flex-row flex-col lapxl:px-0 px-8 w-full h-full flex items-start xl:flex-row justify-between`}>

                {/* ----------------- LEFT SECTION ----------------- */}
                <div className="w-full lg:w-[50%] flex flex-col h-full">
                    <div className='text-primary py-2 px-4 w-fit rounded-full bg-primary/10 border border-primary/20 text-sm font-medium flex gap-2 items-center'>
                        <Icon icon={"solar:star-line-duotone"} />
                        <p>Available for Projects</p>
                    </div>

                    <div className='w-full gap-y-4 pt-8 flex flex-col'>
                        <p className='text-5xl lg:text-7xl font-bold leading-tight'>
                            Hi, I&apos;m{" "}
                            <span className='text-gradient'>
                                Kashyap
                            </span>
                        </p>
                        <p className='text-xl lg:text-2xl text-[#64748b] dark:text-[#94a3b8] font-medium'>
                            Code is not just logic —
                            <span className='text-black ml-2 dark:text-white'>
                                it’s creativity that solves real problems
                            </span>
                        </p>
                    </div>

                    <div className='pt-8'>
                        <p className='text-lg text-justify text-[#64748b] dark:text-[#94a3b8] leading-relaxed'>
                            A passionate <strong>MERN Stack Developer</strong> and <strong>Next.js specialist</strong>. I transform ideas into high-performing, user-friendly web applications using modern technologies like React, Node.js, Express, and MongoDB. From designing intuitive front-end interfaces to developing scalable back-end systems, I focus on building fast, secure, and SEO-optimized digital experiences that help businesses grow online.
                        </p>
                    </div>

                    <div className='w-full pt-12 flex gap-y-6 md:gap-y-0 flex-col md:flex-row md:gap-x-8'>
                        <button className="relative overflow-hidden bg-primary text-white font-semibold text-sm py-4 h-fit flex justify-center gap-x-4 items-center px-8 rounded-full group">
                            <Link href={"/#contact"}>
                                <span className="relative z-10 flex items-center gap-x-4">
                                    Let&apos;s Work Together
                                    <Icon height={20} width={20} icon={"mingcute:arrow-right-line"} />
                                </span>
                            </Link>
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></span>
                        </button>
                        <Link href={"/#projects"}>
                            <button className='w-full py-4 dark:hover:bg-[#1e293b] dark:bg-[#020817] hover:bg-[#f1f5f9] dark:outline-[#1f2a3d] outline outline-[#e2e8f0] shadow-sm outline-1 px-8 rounded-full font-semibold text-sm h-fit flex bg-white justify-center items-center gap-x-4'>
                                <Icon height={20} width={20} icon={"ep:video-play"} />
                                View My Work
                            </button>
                        </Link>
                    </div>

                    <div>

                    </div>
                </div>

                {/* ----------------- RIGHT SECTION ----------------- */}
                <div className="w-full lg:w-[45%] h-[420px] relative flex justify-center items-center mt-16 lg:mt-0">

                    {/* Background Gradient */}
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="w-full h-full bg-gradient-to-r from-primary/60 to-purple-500/60 rounded-[40px] blur-[120px] opacity-70 mix-blend-overlay"></div>
                    </div>

                    {/* Floating Tech Icons (now well spaced around code window) */}
                    {techIconsHeroSection.map((item, index) => (
                        <motion.div
                            key={index}
                            className="absolute flex flex-col items-center text-center z-20"
                            style={{
                                top: item.top,
                                bottom: item.bottom,
                                left: item.left,
                                right: item.right,
                                transform: `translate(${item.translate})`
                            }}
                            animate={{
                                y: [0, -10, 0],
                                x: [0, 10, 0],
                                rotate: [0, 5, -5, 0],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: item.delay,
                            }}
                        >
                            <Icon icon={item.icon} width={45} height={45} className="drop-shadow-md" />
                            <p className="text-xs text-[#94a3b8] dark:text-gray-400 mt-1 font-medium">{item.label}</p>
                        </motion.div>
                    ))}

                    {/* Floating Code Window */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className='absolute top-[5rem] lg:top-[6rem] xl:top-[5rem] z-10'
                    >
                        <div className='bg-[#1A2537] p-6 rounded-2xl shadow-2xl'>
                            <div className="relative z-10 w-full md:w-[350px] bg-[#0f172a] rounded-2xl border border-white/10 p-5 text-white">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                                    <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                                    <p className="text-xs text-gray-400 ml-2">App.js</p>
                                </div>
                                <pre className="text-[13px] leading-relaxed font-mono">
                                    <span className="text-[#60a5fa]">import React from &apos;react&apos;</span>{'\n\n'}
                                    <span className="text-[#4ade80]">const App = () =&gt; {'{'}</span>{'\n'}
                                    <span className="text-[#facc15]">  return (</span>{'\n'}
                                    <span className="text-[#c084fc]">    &lt;div className=&apos;hero&apos;&gt;</span>{'\n'}
                                    <span className="text-[#22d3ee]">      &lt;h1&gt;Web Developer&lt;/h1&gt;</span>{'\n'}
                                    <span className="text-[#c084fc]">    &lt;/div&gt;</span>{'\n'}
                                    <span className="text-[#facc15]">  )</span>{'\n'}
                                    <span className="text-[#60a5fa]">{'}'}</span>
                                </pre>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div >
    )
}

export default HeroSection
