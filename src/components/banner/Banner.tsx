// import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
    return (
        <section
            id="home"
            className="w-full min-h-screen flex flex-col lgl:flex-row items-center justify-between px-5 md:px-10 border-b border-white font-titleFont bg-[#191b1e]"
        >
            <LeftBanner />
            <RightBanner />
        </section>
    );
};

export default Banner;
