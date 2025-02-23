import React from "react";
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
    return (
        <div className="w-full lg:w-1/2 flex justify-center relative mt-10 lg:mt-0">
            <div className="relative flex justify-center">
                <img
                    className="w-[250px] sm:w-[350px] md:w-[400px] lg:w-[500px] h-auto z-10 rounded-lg"
                    src={bannerImg}
                    alt="bannerImg"
                />
                <div className="absolute bottom-0 w-[80%] h-[50%] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne rounded-xl"></div>
            </div>
        </div>
    );
};

export default RightBanner;
