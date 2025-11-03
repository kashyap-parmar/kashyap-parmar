"use client";
import React from "react";
import { FeaturedSkillsData } from "@/mock/data";
import { TechSkillsCardReuse, Icon } from "@/components";

// -------------------------------------------

const TechnicalExpertiseSection = () => {
    return (
        <div
            id="skills"
            className="w-full flex justify-center items-center dark:bg-[#020817] bg-white pt-28"
        >
            <div
                className={`max-w-[1300px] w-full flex flex-col gap-y-16 justify-center items-center lapxl:px-0 px-8`}
            >
                {/* Upper Section */}
                <div className="w-full flex flex-col justify-center items-center gap-y-12">
                    <div className="w-full flex flex-col justify-center items-center gap-y-6">
                        <div className="text-primary py-2 px-4 w-fit rounded-full bg-primary/10 border border-primary/20 text-sm font-medium flex gap-2 items-center">
                            <Icon icon="solar:star-linear" />
                            <p>Featured Skills</p>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-y-6">
                            <p className="text-4xl text-gradient text-center lg:text-5xl font-bold">
                                Technical Expertise
                            </p>
                            <p className="text-xl text-[#64748b] text-center max-w-3xl leading-relaxed">
                                Proficient in modern web development technologies and
                                frameworks
                            </p>
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="w-full flex flex-col justify-center items-center gap-y-16">
                    {FeaturedSkillsData.map((ele, index) => {
                        return (
                            <TechSkillsCardReuse ele={ele} key={index} />
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default TechnicalExpertiseSection;
