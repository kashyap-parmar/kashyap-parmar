import { SpecificProjectPageComponent } from '@/components';
import { SampleProjectsData } from '@/mock/data';
import React from 'react'

// -------------------------------------------

const SpecificProjectPage = async ({ params }) => {

    const { slug } = await params;

    const project = SampleProjectsData.find((item) => item.id.toString() === slug);

    if (!project) {
        return (
            <div className="text-center min-h-screen flex justify-center items-center py-10">
                Project not found
            </div>
        );
    }

    return (
        <>
            <SpecificProjectPageComponent project={project} />
        </>
    )
}

export default SpecificProjectPage
