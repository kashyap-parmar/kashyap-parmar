import React from "react";
import { SampleBlogData } from "@/mock/data";
import { SpecificBlogPageComponent } from "@/components";

// ----------------------------------------

const SpecificBlogPage = async ({ params }) => {

    const { slug } = await params;

    const blog = SampleBlogData.find((item) => item.id.toString() === slug);

    if (!blog) {
        return (
            <div className="text-center min-h-screen flex justify-center items-center py-10">
                Blog not found
            </div>
        );
    }

    return <SpecificBlogPageComponent blog={blog} />;
};

export default SpecificBlogPage;
