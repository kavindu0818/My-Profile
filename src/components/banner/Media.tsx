import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
// import {SiTailwindcss} from "react-icons/si";
// import {MdHtml} from "react-icons/md";
// import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

const Media = () => {
  return (
      <div className="flex flex-col xl:flex-row top-96 absolute gap-6 lg:gap-0 justify-between">
        {/* Social Media Links */}
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4 left-5 absolute text-gray-400 w-60 top-52 ">
            Find me in
          </h2>
          <div className="flex gap-4 top-60 left-5 absolute">
          <span className="w-16 h-16 bg-black bg-opacity-25 text-gray-200
                          text-xl inline-flex items-center justify-center
                          rounded-md hover:bg-opacity-40
                          hover:-translate-y-1 transition-all
                          hover:text-yellow-400 cursor-pointer duration-300
                          shadow-lg hover:shadow-xl">
            <FaFacebookF />
          </span>
            <span className="w-16 h-16 bg-black bg-opacity-25 text-gray-200
                          text-xl inline-flex items-center justify-center
                          rounded-md shadow-md hover:bg-opacity-40
                          hover:-translate-y-1 transition-all
                          hover:text-yellow-400 cursor-pointer duration-300
                          shadow-lg hover:shadow-xl">
            <FaTwitter />
          </span>
            <span className="w-16 h-16 bg-black bg-opacity-25 text-gray-200
                          text-xl inline-flex items-center justify-center
                          rounded-md shadow-md hover:bg-opacity-40
                          hover:-translate-y-1 transition-all
                          hover:text-yellow-400 cursor-pointer duration-300
                          shadow-lg hover:shadow-xl">
            <FaLinkedinIn />
          </span>
          </div>
        </div>
        {/* Skills Section */}
        {/* Uncomment the code below if you want to include the skills section */}
        {/*<div>*/}
        {/*  <h2 className="text-base uppercase font-titleFont mb-4 text-gray-400">*/}
        {/*    BEST SKILL ON*/}
        {/*  </h2>*/}
        {/*  <div className="flex gap-4">*/}
        {/*    <span className="w-16 h-16 bg-black bg-opacity-25 text-gray-200*/}
        {/*                    text-xl inline-flex items-center justify-center*/}
        {/*                    rounded-md shadow-md hover:bg-opacity-40*/}
        {/*                    hover:-translate-y-1 transition-all*/}
        {/*                    hover:text-blue-400 cursor-pointer duration-300">*/}
        {/*      <FaReact />*/}
        {/*    </span>*/}
        {/*    <span className="w-16 h-16 bg-black bg-opacity-25 text-gray-200*/}
        {/*                    text-xl inline-flex items-center justify-center*/}
        {/*                    rounded-md shadow-md hover:bg-opacity-40*/}
        {/*                    hover:-translate-y-1 transition-all*/}
        {/*                    hover:text-blue-400 cursor-pointer duration-300">*/}
        {/*      <SiNextdotjs />*/}
        {/*    </span>*/}
        {/*    <span className="w-16 h-16 bg-black bg-opacity-25 text-gray-200*/}
        {/*                    text-xl inline-flex items-center justify-center*/}
        {/*                    rounded-md shadow-md hover:bg-opacity-40*/}
        {/*                    hover:-translate-y-1 transition-all*/}
        {/*                    hover:text-blue-400 cursor-pointer duration-300">*/}
        {/*      <SiTailwindcss />*/}
        {/*    </span>*/}
        {/*    <span className="w-16 h-16 bg-black bg-opacity-25 text-gray-200*/}
        {/*                    text-xl inline-flex items-center justify-center*/}
        {/*                    rounded-md shadow-md hover:bg-opacity-40*/}
        {/*                    hover:-translate-y-1 transition-all*/}
        {/*                    hover:text-blue-400 cursor-pointer duration-300">*/}
        {/*      <SiFigma />*/}
        {/*    </span>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
  );
};

export default Media;
