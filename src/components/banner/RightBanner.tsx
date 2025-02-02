import React from 'react'
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
    return (
        <div className="w-full lgl:w-1/2 flex justify-center left-80 -top-64 relative">
            <img
                className="w-[500px] h-[600px] lgl:w-[500px] lgl:h-[680px] z-10"
                src={bannerImg}
                alt="bannerImg"
            />
            <div className="absolute bottom-0 w-[500px] h-[400px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
        </div>
    );
}

export default RightBanner