"use client";
import { CustomNavbar } from "@/components";

// ----------------------------------------------------

const NotfoundPage = () => {
    return (
        <div className="text-center min-h-screen flex flex-col justify-center items-center pb-10">
            {/* <CustomNavbar
                path={"/"}
                // title="Works That Speak"
                subTitleBtn="Home"
            /> */}
            {/* <div className="flex flex-col justify-center items-center" > */}
            <div className="flex flex-col cursor-pointer text-2xl bg-gradient-to-r from-primary via-blue-600 to-cyan-600 bg-clip-text text-transparent logo-animate font-bold">
                <p className='text-[100px] leading-[120px]' >404</p>
            </div>
            <span className="dark:text-white text-black text-2xl font-bold" > Ooops ! <br /> Page not found </span>
        </div>
        // </div>
    )
}

export default NotfoundPage;
