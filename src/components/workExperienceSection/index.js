"use client";
import React from "react";
import Icon from "../icon";
import { workExpSection } from "@/mock/data";
import { useSafeMediaQuery } from "@/hooks/useSafeMediaQuery";
import WorkExpCardReuse from "./workExpCardReuse";

// -----------------------------------------------

const WorkExpSection = () => {
    const coustomXL = useSafeMediaQuery("(min-width:1364px)");

    return (
        <>
            <div id="experience" className=" py-28 w-full flex justify-center items-center dark:bg-[#020817] bg-white">
                <div
                    className={`max-w-[1300px] w-full flex-col gap-y-16 flex justify-center items-center ${coustomXL ? "px-0" : "px-8"}`}
                >
                    {/* Upper section  */}
                    <div className="w-full flex flex-col justify-center items-center gap-y-12">
                        <div className="w-full flex gap-y-6 justify-center items-center flex-col">
                            <div className="text-primary py-2 px-4 w-fit rounded-full bg-primary/10 border border-primary/20 text-sm font-medium flex gap-2 items-center">
                                <Icon icon={"simple-line-icons:graduation"} />
                                <p>Professional Journey</p>
                            </div>

                            <div className="flex flex-col justify-center items-center gap-y-6">
                                <p className="text-4xl text-center lg:text-5xl font-bold">
                                    Work
                                    <span className="text-gradient pl-2">Experience</span>
                                </p>
                                <p className="text-xl text-[#64748b] text-center max-w-3xl leading-relaxed">
                                    My professional journey and key achievements in web
                                    development
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-fit flex justify-center relative">
                        <div className="h-full px-2 lg:px-8">
                            <span className="absolute h-full top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-cyan-500"></span>
                        </div>
                        <div className="flex flex-col gap-y-8">
                            {
                                workExpSection.map((ele, index) => {
                                    return (
                                        <WorkExpCardReuse ele={ele} key={index} />
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WorkExpSection;
