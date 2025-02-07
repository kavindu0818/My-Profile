// ResumeCard.js (or .tsx if using TypeScript)
const ResumeCard = ({ title, subTitle, result, des }) => {
  return (
      <div className="w-2/3 h-1/3 left-44  relative group flex">
        <div className="w-10 h-[6px]  bg-black mt-16 relative ">
        <span className="absolute w-5 h-5 rounded-full -top-2  flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-yellow-400 duration-300"></span>
        </span>
        </div>
        <div className="w-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow:10px 10px 19px #1c1e22, -10px -10px 19px #262a2e group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100  hover:gray-900  bg-opacity-20 hover:bg-opacity-30  rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
          <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-white duration-300">
                {title}
              </h3>
              <p className="text-sm mt-2 text-gray-400 group-hover:text-white duration-300">
                {subTitle}
              </p>
            </div>
            <div>
              <p className="px-4 py-2 text-designColor bg-yellow-400 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium">
                {result}
              </p>
            </div>
          </div>
          <p className="text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300">
            {des}
          </p>
        </div>
      </div>
  );
};

export default ResumeCard;
