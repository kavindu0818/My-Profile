import React from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';
// import {bannerImg} from "../../assets";

const LeftBanner: React.FC = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
      // className="w-full lgl:w-1/2 flex flex-col gap-20"
      <div className="w-full lgl:w-1/2 flex flex-col gap-20">
        <div className="flex flex-col gap-5 left-5 top-56 relative">
          <h4 className="text-lg font-normal text-white">WELCOME TO MY WORLD</h4>
          <h1 className="text-6xl font-bold text-white">
            Hi, I'm <span className="text-yellow-400 capitalize">Madhuranga</span>
          </h1>
          <h2 className="text-4xl font-bold text-white">
            a <span>{text}</span>
            <Cursor
                cursorBlinking={false}
                cursorStyle="|"
                cursorColor="rgb(250 204 21)"
            />
          </h2>
          <p className="text-base font-bodyFont leading-6 tracking-wide text-gray-300 w-2/4">
            I use animation as a third dimension by which to simplify experiences
            and guiding through each and every interaction. I'm not adding motion
            just to spruce things up, but doing it in ways that.
          </p>

          <button
              className="w-40 h-10 bg-bodyColor text-white font-bold border border-white rounded-b-2xl hover:bg-yellow-400 hover:text-black">
            Download CV
          </button>
        </div>
        {/* Media Component */}
        <Media/>

        {/*<div className="w-full lgl:w-1/2 left-72 -top-64 h-96 flex justify-center items-center relative">*/}
        {/*  <img*/}
        {/*      className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"*/}
        {/*      src={bannerImg}*/}
        {/*      alt="bannerImg"*/}
        {/*  />*/}
        {/*  <div*/}
        {/*      className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>*/}
        {/*</div>*/}
      </div>


  );
}

export default LeftBanner;
