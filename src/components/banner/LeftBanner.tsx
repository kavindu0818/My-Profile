import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner: React.FC = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
      <div className="w-full lg:w-1/2 flex flex-col gap-10 text-center lg:text-left px-4 sm:px-8 lg:px-0">
        <div className="flex flex-col gap-5">
          <h4 className="text-lg font-normal text-white">WELCOME TO MY WORLD</h4>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Hi, I'm <span className="text-yellow-400 capitalize">Madhuranga</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            a <span>{text}</span>
            <Cursor cursorBlinking={false} cursorStyle="|" cursorColor="rgb(250 204 21)" />
          </h2>
          <p className="text-sm sm:text-base leading-6 tracking-wide text-gray-300 max-w-[90%] mx-auto lg:mx-0">
            I use animation as a third dimension by which to simplify experiences and guide
            interactions. I'm not adding motion just to spruce things up, but doing it in ways that
            enhance usability.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="w-40 h-10 bg-bodyColor text-white font-bold border border-white rounded-b-2xl hover:bg-yellow-400 hover:text-black">
              Download CV
            </button>
          </div>
        </div>
        {/* Media Component */}
        <Media />
      </div>
  );
};

export default LeftBanner;
