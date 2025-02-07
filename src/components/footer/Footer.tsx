import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../../assets/index";
import FooterBottom from "./FooterBottom.tsx";

const Footer = () => {
  return (
      <div className="w-full flex flex-col lgl:flex-row items-center justify-between px-5 md:px-10 border-b border-white font-titleFont bg-[#191b1e] pb-5">
        <div className="w-full h-full flex flex-col gap-8">
          <img className="w-32" src={logo} alt="logo" />
          <div className="flex gap-4 -top-20 left-240 relative">
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
                          rounded-md hover:bg-opacity-40
                          hover:-translate-y-1 transition-all
                          hover:text-yellow-400 cursor-pointer duration-300
                          shadow-lg hover:shadow-xl">
            <FaTwitter />
          </span>
            <span className="w-16 h-16 bg-black bg-opacity-25 text-gray-200
                          text-xl inline-flex items-center justify-center
                          rounded-md hover:bg-opacity-40
                          hover:-translate-y-1 transition-all
                          hover:text-yellow-400 cursor-pointer duration-300
                          shadow-lg hover:shadow-xl">
            <FaLinkedinIn />
          </span>
          </div>
          <FooterBottom />
        </div>
      </div>
  );
}

export default Footer;
