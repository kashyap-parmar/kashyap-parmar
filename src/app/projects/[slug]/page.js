import { CustomNavbarBlog, SpecificProjectPageComponent } from '@/components';
import { SampleProjectsData } from '@/mock/data';
import React from 'react'

// -------------------------------------------

const SpecificProjectPage = async ({ params }) => {

    const { slug } = await params;

    const project = SampleProjectsData.find((item) => item?.slug?.toString() === slug);

    if (!project) {
        return (
            <div>
                <CustomNavbarBlog
                    subTitleBtn={"Projects"}
                    path={"/projects"}
                    isBlog={false}
                />
                <div className="text-center min-h-screen flex flex-col justify-center items-center py-10">
                    <div className="flex flex-col cursor-pointer text-2xl bg-gradient-to-r from-primary via-blue-600 to-cyan-600 bg-clip-text text-transparent logo-animate font-bold">
                        <p className='text-[100px] leading-[120px]' >404</p>
                    </div>
                    <span className="dark:text-white text-black text-2xl font-bold" > Ooops ! <br /> Page not found </span>
                </div>
            </div>
        );
    }

    return (
        <SpecificProjectPageComponent project={project} slug={slug} />
    )
}

export default SpecificProjectPage
