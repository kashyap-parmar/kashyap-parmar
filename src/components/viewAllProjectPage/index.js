"use client";
import { useEffect, useState } from "react";
import { SampleProjectsData } from "@/mock/data";
import { CustomNavbar, ProjectSectionCard, Icon } from "@/components";

// --------------------------------------

const ViewAllProjectComponent = () => {
    const [selectedFilter, setSelectedFilter] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [featuredProjects, setFeaturedProjects] = useState([]);
    const [allProjects, setAllProjects] = useState([]);

    const handleFilterChange = () => {
        const query = searchQuery.toLowerCase().trim().replace(/\s+/g, " ");

        const filteredProjects = SampleProjectsData.filter((el) => {

            if (el?.title.toLowerCase().includes() ||
                el?.company.toLowerCase().includes(query) ||
                el?.description.toLowerCase().includes(query) ||
                el?.category.toLowerCase().includes(query) ||
                el?.company.toLowerCase().includes(query) ||
                el?.tech.filter((t) => t?.toLowerCase().includes(query)).length > 0
            ) {
                if (selectedFilter === "All") {
                    return true;
                } else {
                    return el?.category === selectedFilter;
                }
            }
        });
        setFeaturedProjects(filteredProjects.filter((el) => el.featured));
        setAllProjects(filteredProjects);
    }

    useEffect(() => {
        setFeaturedProjects(SampleProjectsData.filter((el) => el.featured));
        setAllProjects(SampleProjectsData);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        handleFilterChange();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchQuery, selectedFilter]);

    return (
        <>
            <div className="w-full dark:bg-[#020817]">
                {/* Navbar  */}
                <CustomNavbar path={"/"} title="Works That Speak" subTitleBtn="Home" />

                <div className="w-fill flex justify-center items-center pt-8 lg:pt-12">
                    <div
                        className={`max-w-[1300px] h-full flex-col w-full gap-x-4 flex justify-center items-start lapxl:px-0 px-8`}
                    >
                        {/* search and filter  */}
                        <div className="w-full items-start gap-y-4 lg:gap-y-0 flex-col lg:flex-row flex justify-between lg:items-center">
                            <div className="flex shadow justify-center items-center gap-x-4 w-full lg:w-[75%] border-[1px] rounded-xl dark:border-[#1e293b] border-[#e2e8f0] py-2 px-3 focus-within:border-primary dark:focus-within:border-white transition-all duration-200">
                                <Icon className="text-[#64748b]" icon="iconoir:search" />
                                <input
                                    type="text"
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    value={searchQuery}
                                    className="w-full md:text-sm focus:outline-none border-none bg-transparent"
                                    placeholder="Search Projects..."
                                />
                            </div>
                            <div className="flex justify-between lg:justify-evenly items-center w-full lg:w-[30%]">
                                <button
                                    onClick={() => setSelectedFilter("All")}
                                    className={`
                                        shadow font-medium text-xs  px-4 py-2 rounded-md border-[#e2e8f0]
                                        ${selectedFilter === "All" ?
                                            "text-white bg-primary border-primary"
                                            : `[ text-black dark:text-white ] 
                                                [ bg-white dark:bg-[#020817] ] 
                                                [ dark:hover:bg-[#1e293b] hover:bg-[#f1f5f9] ]
                                                [ dark:hover:text-[#f8fafc] dark:border-[#1e293b] ] border-[1px]`
                                        }`
                                    }>
                                    All
                                </button>

                                <button
                                    onClick={() => setSelectedFilter("Full Stack")}
                                    className={`
                                        shadow font-medium text-xs  px-2 lg:px-3 py-2 rounded-md border-[#e2e8f0]
                                        ${selectedFilter === "Full Stack" ?
                                            "text-white bg-primary border-primary"
                                            : `[ text-black dark:text-white ] 
                                            [ bg-white dark:bg-[#020817] ] 
                                            [ dark:hover:bg-[#1e293b] hover:bg-[#f1f5f9] ]
                                            [ dark:hover:text-[#f8fafc] dark:border-[#1e293b] ] border-[1px]`
                                        }`
                                    }>
                                    Full Stack
                                </button>

                                <button
                                    onClick={() => setSelectedFilter("Frontend")}
                                    className={`
                                        shadow font-medium text-xs px-2 lg:px-3 py-2 rounded-md border-[#e2e8f0]
                                        ${selectedFilter === "Frontend" ?
                                            "text-white bg-primary border-primary"
                                            : `[ text-black dark:text-white ] 
                                            [ bg-white dark:bg-[#020817] ] 
                                            [ dark:hover:bg-[#1e293b] hover:bg-[#f1f5f9] ]
                                            [ dark:hover:text-[#f8fafc] dark:border-[#1e293b] ] border-[1px]`
                                        }`
                                    }>
                                    Frontend
                                </button>
                                <button
                                    onClick={() => setSelectedFilter("Backend")}
                                    className={`
                                        shadow font-medium text-xs  px-2 lg:px-3 py-2 rounded-md border-[#e2e8f0]
                                        ${selectedFilter === "Backend" ?
                                            "text-white bg-primary border-primary"
                                            : `[ text-black dark:text-white ] 
                                            [ bg-white dark:bg-[#020817] ] 
                                            [ dark:hover:bg-[#1e293b] hover:bg-[#f1f5f9] ]
                                            [ dark:hover:text-[#f8fafc] dark:border-[#1e293b] ] border-[1px]`
                                        }`
                                    }>
                                    Backend
                                </button>
                            </div>
                        </div>

                        <p className="pt-8 text-[#64748b]">Showing {allProjects?.length || 7} of all projects</p>

                        {/* Featured Project  */}
                        <div className="w-full flex flex-col pt-10 gap-y-4">
                            <p className="text-2xl font-semibold">Featured Projects</p>
                            <div className="w-full pt-4 pb-8 gap-6 flex flex-wrap items-center justify-center">
                                {featuredProjects?.map((ele, index) => {
                                    return (
                                        <ProjectSectionCard ele={ele} key={index} />
                                    );
                                })}
                            </div>
                        </div>

                        {/* All Project  */}
                        <div className="w-full flex flex-col pt-10 gap-y-4">
                            <p className="text-2xl font-semibold">All Projects</p>
                            <div className="w-full pt-4 pb-8 gap-6 flex flex-wrap items-center justify-center overflow-hidden">
                                {allProjects?.map((ele, index) => {
                                    return (
                                        <ProjectSectionCard ele={ele} key={index} />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewAllProjectComponent;
