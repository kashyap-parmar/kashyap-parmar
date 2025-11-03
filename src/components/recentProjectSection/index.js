"use client";
import React from "react";
import Link from "next/link";
import { Icon, ProjectSectionCard } from "@/components";
import { SampleProjectsData } from "@/mock/data";

// ----------------------------------------------

const RecentProjectSection = () => {
    return (
        <div
            id="projects"
            className="pt-28 max-w-full flex justify-center dark:bg-[#040B1C] section-bg items-center lapxl:px-0 p-4 sm:px-8 overflow-hidden"
        >
            <div className={`max-w-[1300px] w-[full] flex flex-col gap-y-16 justify-center items-center`}>
                <div className="w-full flex flex-col justify-center items-center gap-y-12">
                    <div className="w-full flex gap-y-6 justify-center items-center flex-col">
                        <div className="text-primary py-2 px-4 w-fit rounded-full bg-primary/10 border border-primary/20 text-sm font-medium flex gap-2 items-center">
                            <Icon icon={"pajamas:work"} />
                            <p>Worthy Works</p>
                        </div>

                        <div className="w-full flex flex-col justify-center items-center gap-y-6">
                            <p className="text-4xl text-center lg:text-5xl font-bold">
                                Featured
                                <span className="text-gradient pl-2">Projects</span>
                            </p>
                            <p className="text-xl text-[#64748b] text-center max-w-3xl leading-relaxed">
                                A showcase of my latest work and technical expertise in modern
                                web development
                            </p>
                        </div>
                    </div>
                </div>

                <div className="max-w-full gap-y-6 lg:gap-6 flex flex-wrap items-center justify-center">
                    {SampleProjectsData?.filter((el) => el?.featured).map((ele, index) => {
                        return (
                            <ProjectSectionCard ele={ele} key={index} />
                        );
                    })}
                </div>

                <div className="w-fit" >
                    <Link href={"/projects"} className="w-fit">
                        <button className="bg-white font-semibold text-sm flex justify-center gap-x-4 rounded-full items-center py-4 px-8 border-[1px] border-[#e2e8f0] hover:bg-[#f1f5f9] dark:hover:bg-[#1e293b] dark:bg-[#020817] dark:border-[#1e293b] dark:text-white">
                            View All Projects
                            <Icon
                                icon={"mingcute:arrow-right-line"}
                                height={20}
                                width={20}
                            />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RecentProjectSection;
