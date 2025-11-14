"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Icon } from "@/components";

// --------------------------------------

const ProjectSectionCard = ({ ele }) => {
	const [toolTipVisible, setToolTipVisible] = useState(false);

	const truncateDesc = (text = "", limit = 85) => {
		if (!text) return "";
		return text.length > limit ? text.substring(0, limit) + "..." : text;
	};

	const truncateHeading = (text = "", limit = 20) => {
		if (!text) return "";
		return text.length > limit ? text.substring(0, limit) + "..." : text;
	};

	return (
		<>
			<div className={`w-[350px] h-[500px] group hover:translate-y-4 shadow-lg transition-all duration-300 ease-in-out dark:border-[#1e293b] rounded-xl border-[#e2e8f0] border-[1px] [ sm:h-[400px] ] [ md:w-[340px] md:h-[500px] ] [ lg:w-[300px] lg:h-[600px] ] [ xl:w-[385px] xl:h-[530px] ] [ lapxl:!w-[415px] lapxl:!h-[600px] ] `}>
				{/* Image  */}
				<div
					className="w-full h-[40%] overflow-hidden rounded-t-xl z-0 relative xl:h-[50%]"
					style={{ background: `url(${ele?.image})` }}
				>
					<Image
						src={ele?.image}
						width={200}
						height={300}
						alt={ele?.alt}
						className="w-full group-hover:opacity-100 h-full from-black bg-gradient-to-r object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
					/>
					{ele?.featured && (
						<p className="absolute top-4 text-xs left-4 font-semibold shadow text-primary dark:border-[#1e293b] bg-white rounded-full py-[0.125rem] px-[0.625rem]">
							Featured
						</p>
					)}

					{ele?.category && (
						<p className="absolute top-4 text-xs right-4 font-semibold dark:text-white dark:border-[#1e293b] dark:bg-[#020817e6] bg-white rounded-full py-[0.125rem] px-[0.625rem]">
							{ele?.category}
						</p>
					)}

					<div className="absolute inset-0 justify-center items-center flex gap-x-4 ">
						{ele?.github && (
							<button className="font-medium hover:bg-[#f1f5f9cc] cursor-pointer shadow-sm text-xs px-3 py-2 text-[#020817] justify-center items-center bg-white rounded-full gap-x-2 hidden group-hover:flex dark:bg-[#1e293b] dark:hover:bg-[#1e293bcc] dark:text-white">
								<Icon
									icon={"line-md:github"}
									height={18}
									width={18}
								/>
								Code
							</button>
						)}

						{ele?.live && (
							<Link href={ele?.live} target='_blank' className="group-hover:flex hidden font-medium cursor-pointer shadow-sm text-xs px-3 py-2 text-white justify-center items-center bg-primary rounded-full gap-x-2">
								<Icon
									icon={"lucide:external-link"}
									height={18}
									width={18}
								/>
								Live
							</Link>
						)}

						{ele?.underDevelopment && (
							<p className="group-hover:flex hidden font-medium shadow-sm text-xs px-3 py-2 text-white justify-center items-center bg-gray-500 rounded-full gap-x-2">
								<Icon
									icon={"icon-park-outline:setting-web"}
									height={18}
									width={18}
								/>
								Under Development
							</p>
						)}

						{ele?.confidential && (
							<p className="group-hover:flex hidden font-medium cursor-not-allowed shadow-sm text-xs px-3 py-2 text-white justify-center items-center bg-gray-500 rounded-full gap-x-2">
								<Icon
									icon={"ant-design:stop-outlined"}
									height={18}
									width={18}
								/>
								Confidential
							</p>
						)}

					</div>
				</div>

				{/* Content  */}
				<div className="w-full rounded-b-xl bg-white p-6 dark:bg-[#020818] flex flex-col gap-4 lg:p-8 h-[60%] xl:h-[50%]">
					<div className='flex items-start justify-between w-full' >
						<p className="text-xl group-hover:text-primary font-bold">
							{truncateHeading(ele?.title, 25)}
						</p>
						<div onMouseEnter={() => setToolTipVisible(true)} onMouseLeave={() => setToolTipVisible(false)} className="w-fit h-fit z-[100] relative" >
							<Icon
								icon={"prime:building"}
								height={24}
								width={24}
								iconClass={"bg-gray-200 rounded-full dark:bg-gray-700 dark:text-white"}
								className={" cursor-pointer"}
							/>
							<span
								className={`
                                    ${toolTipVisible ? "block -translate-y-1" : "hidden translate-y-0"} 
                                    [ absolute left-1/2 -translate-x-40 lg:-translate-x-1/2 -top-10 transition-all duration-200 ]
                                    whitespace-nowrap z-[999]
                                    bg-white text-black dark:bg-white 
                                    px-3 py-1 rounded-full text-sm w-fit
                                    pointer-events-none`
								}
							>
								{ele?.company || ""}
							</span>
						</div>
					</div>
					<div
						className={`leading-relaxed text-[#64748b] text-justify`} // h-[100px] sm:h-[50px] md:h-[80px] lg:h-[100px] xl:h-[80px]
						dangerouslySetInnerHTML={{ __html: truncateDesc(ele?.description, 80) }}
					/>
					<div className="w-full flex flex-wrap gap-2 lg:gap-4">
						{ele?.tech.slice(0, 3).map((item, index) => (
							<p
								key={index}
								className="px-2.5 h-fit py-0.5 text-[#020817] font-medium rounded-xl text-xs bg-[#f1f5f9] dark:text-[#f8fafc] dark:bg-[#1e293b]"
							>
								{item}
							</p>
						))}

						{ele?.tech.length > 3 && (
							<p className="px-2.5 h-fit py-0.5 text-[#020817] font-medium rounded-xl text-xs bg-[#f1f5f9] dark:text-[#f8fafc] dark:bg-[#1e293b]">
								+{ele.tech.length - 3} more
							</p>
						)}
					</div>

					<Link href={`/projects/${ele?.slug}`}>
						<span className="w-full text-sm group-hover:bg-[#2563eb] group-hover:text-white transition-all duration-300 ease-in-out cursor-pointer rounded-full py-2 px-4 bg-white border-[1px] border-[#e2e8f0] flex justify-center items-center gap-x-4 dark:bg-[#020817] dark:border-[#1e293b] dark:text-white dark:hover:bg-[#1e293b]">
							View Details
							<Icon
								icon={"mynaui:arrow-right"}
								width={20}
								height={20}
							/>
						</span>
					</Link>
				</div>
			</div>
		</>
	)
}

export default ProjectSectionCard
