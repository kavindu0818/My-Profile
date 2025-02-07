import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";
import Media from "../banner/Media.tsx";

const ContactLeft = () => {
  return (
      <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
        <img
            className="w-full h-64 object-cover rounded-lg mb-2"
            src={contactImg}
            alt="contactImg"
        />
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl font-bold text-white">Kavindu Madhuranga</h3>
          <p className="text-lg font-normal text-gray-400">
            MERN Stack Developer
          </p>
          <p className="text-base text-gray-400 tracking-wide">
              Thanks for visiting my portfolio! Feel free to reach out for any inquiries, collaborations, or project discussions. I'm excited to connect and explore how we can work together!
          </p>
          <p className="text-base text-gray-400 flex items-center gap-2">
            Phone: <span className="text-lightText">+94701260063</span>
          </p>
          <p className="text-base text-gray-400 flex items-center gap-2">
            Email: <span className="text-lightText">kavindumaduranga184@gmail.com</span>
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
          <div className="flex gap-4">
          <span  className="w-16 h-16 bg-black bg-opacity-25 text-gray-200
                          text-xl inline-flex items-center justify-center
                          rounded-md hover:bg-opacity-40
                          hover:-translate-y-1 transition-all
                          hover:text-yellow-400 cursor-pointer duration-300
                          shadow-lg hover:shadow-xl">
            <FaFacebookF />
          </span>
            <span   className="w-16 h-16 bg-black bg-opacity-25 text-gray-200
                          text-xl inline-flex items-center justify-center
                          rounded-md hover:bg-opacity-40
                          hover:-translate-y-1 transition-all
                          hover:text-yellow-400 cursor-pointer duration-300
                          shadow-lg hover:shadow-xl">
            <FaTwitter />
          </span>
            <span  className="w-16 h-16 bg-black bg-opacity-25 text-gray-200
                          text-xl inline-flex items-center justify-center
                          rounded-md hover:bg-opacity-40
                          hover:-translate-y-1 transition-all
                          hover:text-yellow-400 cursor-pointer duration-300
                          shadow-lg hover:shadow-xl">
            <FaLinkedinIn />
          </span>

          </div>
        </div>
      </div>
  );
}

export default ContactLeft