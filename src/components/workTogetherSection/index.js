"use client";
import * as yup from "yup";
import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Icon } from "@/components";
import {
    city,
    country,
    email,
    github,
    linkedin,
    phone
} from "@/mock/data";

// -----------------------------------------------------------------------------------------------

const WorkTogetherSection = () => {

    const schema = yup.object().shape({
        name: yup.string().required("Name is required"),
        email: yup
            .string()
            .email("Invalid email address")
            .required("Email is required"),
        subject: yup.string().min(3, "Message must be at least 3 characters").required("subject is required"),
        message: yup.string().min(3, "Message must be at least 3 characters").required("Message is required"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        const whatsappNumber = phone;
        const text = `New Contact Form Submission:%0AName: ${data.name}%0AEmail: ${data.email}%0ASubject: ${data.subject}%0AMessage: ${data.message}`;
        window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
        reset();
    };

    return (
        <div
            id="contact"
            className="pt-28 w-full flex justify-center items-center dark:bg-[#020817] bg-white pb-28"
        >
            <div
                className={`max-w-[1000px] px-8 xl:px-0 w-full flex-col gap-y-20 flex justify-center items-center`}
            >
                <div className="w-full flex flex-col justify-center items-center gap-y-12">
                    <div className="w-full flex gap-y-6 justify-center items-center flex-col">
                        <div className="text-primary py-2 px-4 w-fit rounded-full bg-primary/10 border border-primary/20 text-sm font-medium flex gap-2 items-center">
                            <Icon icon={"material-symbols:mail-outline"} />
                            Get In Touch
                        </div>

                        <div className="flex flex-col justify-center items-center gap-y-6">
                            <p className="text-4xl text-center lg:text-5xl font-bold">
                                Let&apos;s Work
                                <span className="text-gradient pl-2">Together</span>
                            </p>
                            <p className="text-xl text-[#64748b] text-center max-w-3xl leading-relaxed">
                                Ready to bring your ideas to life? Let&apos;s discuss your project
                                and create something amazing together.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row w-full h-fit justify-between  items-center gap-y-12 lg:gap-y-0 lg:items-start">
                    {/* Left Content  */}
                    <div className="w-full lg:w-[48%] flex flex-col gap-y-8 justify-center ">
                        <div>
                            <p className="text-2xl font-bold">Lets Connect</p>
                        </div>
                        <div className="flex w-full flex-col gap-y-8">
                            {<Link href={`mailto:${email}`} >
                                <div className="w-full flex items-center gap-x-4 p-4 rounded-2xl hover:bg-[#f1f5f980]/50 dark:hover:bg-[#1e293b80] transition-colors">
                                    <div className="w-14 h-14 flex justify-center items-center">
                                        <Icon
                                            width={24}
                                            height={24}
                                            className={"text-blue-500"}
                                            icon={"material-symbols:mail-outline-rounded"}
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="font-semibold text-lg">Email</p>
                                        <p className="text-[#64748b]">{email || ""}</p>
                                    </div>
                                </div>
                            </Link>}
                            {<Link href={`tel:${phone}`} >
                                <div className="w-full flex items-center gap-x-4 p-4 rounded-2xl hover:bg-[#f1f5f980]/50 dark:hover:bg-[#1e293b80] transition-colors">
                                    <div className="w-14 h-14 flex justify-center items-center">
                                        <Icon
                                            width={24}
                                            height={24}
                                            className={"text-green-500"}
                                            icon={"mdi-light:phone"}
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="font-semibold text-lg">Phone</p>
                                        <p className="text-[#64748b]">{phone || ""}</p>
                                    </div>
                                </div>
                            </Link>}
                            <div className="w-full flex items-center gap-x-4 p-4 rounded-2xl hover:bg-[#f1f5f980]/50 dark:hover:bg-[#1e293b80] transition-colors">
                                <div className="w-14 h-14 flex justify-center items-center">
                                    <Icon
                                        width={24}
                                        height={24}
                                        className={"text-purple-500"}
                                        icon={"ion:location-outline"}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <p className="font-semibold text-lg">Location</p>
                                    <p className="text-[#64748b]">{city || ""} , {country || ""}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-6">
                            <p className="text-lg font-semibold">Follow Me</p>
                            <div className="flex gap-x-4 justify-start items-center">
                                <Link
                                    href={github || "#"}
                                    target="_blank"
                                    className="flex justify-center shadow-sm rounded-full text-sm font-medium px-8 py-2 bg-white border-[1px] dark:bg-[#020817] dark:border-[#1e293b] dark:hover:bg-[#1e293b] border-[#e2e8f0] items-center gap-x-2 hover:bg-[#f1f5f9]"
                                >
                                    <Icon icon={"line-md:github"} />
                                    Github
                                </Link>
                                <Link
                                    href={linkedin || "#"}
                                    target="_blank"
                                    className="flex justify-center shadow-sm rounded-full text-sm font-medium px-8 py-2 bg-white border-[1px] dark:bg-[#020817] dark:border-[#1e293b] dark:hover:bg-[#1e293b] border-[#e2e8f0] items-center gap-x-2 hover:bg-[#f1f5f9]"
                                >
                                    <Icon icon={"meteor-icons:linkedin"} />
                                    LinkedIn
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Content  */}
                    <div className="flex justify-center items-center w-full lg:w-[48%]">
                        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-y-8 p-8 border-[1px] rounded-xl shadow-sm dark:border-[#1e293b] border-[#e2e8f0]">
                            <div className="w-full gap-y-8 lg:gap-y-0 flex-col lg:flex-row flex justify-between items-center">
                                <div className="w-full lg:w-[48%] flex gap-y-4 flex-col justify-center items-start">
                                    <p className="text-sm font-semibold ">Name</p>
                                    <div className="w-full" >
                                        <input
                                            {...register("name")}
                                            placeholder="full name"
                                            type="text"
                                            name="name"
                                            className="w-full text-sm rounded-lg py-3 px-3 border-[0.5px] border-[#e2e8f0] bg-[#f1f5f980] dark:border-[#1e293b] dark:bg-[#1e293b80]"
                                        />
                                        {errors.name && (
                                            <p className="text-red-500 text-xs mt-1">{errors?.name?.message}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="w-full lg:w-[48%] flex gap-y-4 flex-col justify-center items-start">
                                    <p className="text-sm font-semibold ">Email</p>
                                    <div className="w-full" >
                                        <input
                                            {...register("email")}
                                            placeholder="your.email@example.com"
                                            type="text"
                                            name="email"
                                            id=""
                                            className="w-full text-sm rounded-lg py-3 px-3 border-[0.5px] border-[#e2e8f0] bg-[#f1f5f980] dark:border-[#1e293b] dark:bg-[#1e293b80]"
                                        />
                                        {errors.email && (
                                            <p className="text-red-500 text-xs mt-1">{errors?.email?.message}</p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="w-full flex justify-center items-start flex-col gap-y-4">
                                <p className="text-sm font-semibold ">Subject</p>
                                <div className="w-full">
                                    <input
                                        {...register("subject")}
                                        placeholder="project Name or subject"
                                        type="text"
                                        name="subject"
                                        id=""
                                        className="w-full text-sm rounded-lg py-3 px-3 border-[0.5px] border-[#e2e8f0] bg-[#f1f5f980] dark:border-[#1e293b] dark:bg-[#1e293b80]"
                                    />
                                    {errors.subject && (
                                        <p className="text-red-500 text-xs mt-1">{errors?.subject?.message}</p>
                                    )}
                                </div>
                            </div>

                            <div className="w-full flex justify-center items-start flex-col gap-y-4">
                                <p className="text-sm font-semibold ">Message</p>
                                <div className="w-full" >
                                    <textarea
                                        {...register("message")}
                                        rows={5}
                                        placeholder="describe your requirements..."
                                        type="text"
                                        name="message"
                                        id=""
                                        className="w-full text-sm rounded-lg py-3 px-3 border-[0.5px] border-[#e2e8f0] bg-[#f1f5f980] dark:border-[#1e293b] dark:bg-[#1e293b80]"
                                    />
                                    {errors.subject && (
                                        <p className="text-red-500 text-xs mt-1">{errors?.message?.message}</p>
                                    )}
                                </div>
                            </div>

                            <div className="w-full">
                                <button type="submit" className="relative w-full overflow-hidden bg-primary text-white font-semibold text-sm lg:text-lg  h-fit flex justify-center gap-x-4 items-center px-4 py-2 lg:px-8 lg:py-4 rounded-xl shadow group">
                                    <span className="relative z-10 flex items-center gap-x-4">
                                        Send Message
                                        <Icon
                                            height={20}
                                            width={20}
                                            icon={"mingcute:arrow-right-line"}
                                        />
                                    </span>
                                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkTogetherSection;
