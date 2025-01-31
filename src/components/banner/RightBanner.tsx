import { bannerImg } from "../../assets/index";

const RightBanner = () => {
    return (
        <div className="w-full flex justify-center items-center -top-50 relative overflow-x-auto">
            <div className="relative left-80">
                <img
                    className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-1000"
                    src={bannerImg}
                    alt="bannerImg"
                />
                <div
                    className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
            </div>
        </div>
    );
}

export default RightBanner;
