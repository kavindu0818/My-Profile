import {
    java,
    html,
    python,
    js,
    typeScript,
    sprinBoot,
    react,
    nextJs,
    nodeJs,
    mongoDb,
    mysql,
    hibernate,
    github,
    windows,
    linux,
    prisma
} from "../assets/SkillsLogo.ts";
import Title from "../components/layouts/Title.tsx";

const Skills = () => {
    return (
        <section id="resume"
                 className="w-full h-full flex flex-col items-center justify-between px-5 md:px-10 border-b border-white font-titleFont bg-[#191b1e] pb-15">

            <div className="flex justify-center items-center text-center mb-8">
                <Title title="7+ YEARS OF EXPERIENCE" des="Skills"/>
            </div>

            {/* Using CSS Grid to organize sections into 2 columns and 3 rows */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
                {/* First Section */}
                <div className="group flex">
                    <div
                        className="w-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-lg hover:bg-gradient-to-b hover:from-gray-900 transition-colors duration-1000 bg-opacity-20 hover:bg-opacity-30 rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
                        <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
                            <h3 className="text-xl md:text-2xl font-semibold text-white">LANGUAGES</h3>
                        </div>
                        <div className="flex flex-row gap-4">
                            {[{img: java, name: "Java"}, {img: html, name: "HTML"}, {img: python, name: "Python"},
                                {img: js, name: "JavaScript"}, {
                                    img: typeScript,
                                    name: "TypeScript"
                                }].map((item, index) => (
                                <span key={index}
                                      className="w-20 h-20 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex flex-col items-center justify-center rounded-md shadow-md hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-yellow-400 cursor-pointer duration-300 shadow-lg hover:shadow-xl">
                                    <img className="w-10 h-8" src={item.img} alt={item.name}/>
                                    <p className="text-xs mt-1">{item.name}</p>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Second Section */}
                <div className="group flex">
                    <div
                        className="w-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-lg hover:bg-gradient-to-b hover:from-gray-900 transition-colors duration-1000 bg-opacity-20 hover:bg-opacity-30 rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
                        <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
                            <h3 className="text-xl md:text-2xl font-semibold text-white">FRAMEWORKS & LIBRARIES</h3>
                        </div>
                        <div className="flex flex-row gap-4">
                            {[{img: sprinBoot, name: "Spring boot"}, {img: react, name: "React"}, {img: nodeJs, name: "Node Js"},
                                {img: nextJs, name: "Next Js"}].map((item, index) => (
                                <span key={index}
                                      className="w-20 h-20 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex flex-col items-center justify-center rounded-md shadow-md hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-yellow-400 cursor-pointer duration-300 shadow-lg hover:shadow-xl">
                                    <img className="w-10 h-8" src={item.img} alt={item.name}/>
                                    <p className="text-xs mt-1">{item.name}</p>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Third Section */}
                <div className="group flex">
                    <div
                        className="w-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-lg hover:bg-gradient-to-b hover:from-gray-900 transition-colors duration-1000 bg-opacity-20 hover:bg-opacity-30 rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
                        <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
                            <h3 className="text-xl md:text-2xl font-semibold text-white">DATABASE</h3>
                        </div>
                        <div className="flex flex-row gap-4">
                            {[{img:mongoDb , name: "Mongo DB"}, {img: mysql, name: "Mysql"}].map((item, index) => (
                                <span key={index}
                                      className="w-20 h-20 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex flex-col items-center justify-center rounded-md shadow-md hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-yellow-400 cursor-pointer duration-300 shadow-lg hover:shadow-xl">
                                    <img className="w-10 h-8" src={item.img} alt={item.name}/>
                                    <p className="text-xs mt-1">{item.name}</p>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Fourth Section */}
                <div className="group flex">
                    <div
                        className="w-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-lg hover:bg-gradient-to-b hover:from-gray-900 transition-colors duration-1000 bg-opacity-20 hover:bg-opacity-30 rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
                        <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
                            <h3 className="text-xl md:text-2xl font-semibold text-white">ORM TOOLS</h3>
                        </div>
                        <div className="flex flex-row gap-4">
                            {[{img: hibernate, name: "Hibernate"},{img: prisma,  name: "prisma"}].map((item, index) => (
                                <span key={index}
                                      className="w-20 h-20 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex flex-col items-center justify-center rounded-md shadow-md hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-yellow-400 cursor-pointer duration-300 shadow-lg hover:shadow-xl">
                                    <img className="w-10 h-8" src={item.img} alt={item.name}/>
                                    <p className="text-xs mt-1">{item.name}</p>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Fifth Section */}
                <div className="group flex">
                    <div
                        className="w-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-lg hover:bg-gradient-to-b hover:from-gray-900 transition-colors duration-1000 bg-opacity-20 hover:bg-opacity-30 rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
                        <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
                            <h3 className="text-xl md:text-2xl font-semibold text-white">VERSION CONTROLS</h3>
                        </div>
                        <div className="flex flex-row gap-4">
                            {[{img: github, name: "GitHub"}].map((item, index) => (
                                <span key={index}
                                      className="w-20 h-20 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex flex-col items-center justify-center rounded-md shadow-md hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-yellow-400 cursor-pointer duration-300 shadow-lg hover:shadow-xl">
                                    <img className="w-10 h-8" src={item.img} alt={item.name}/>
                                    <p className="text-xs mt-1">{item.name}</p>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sixth Section */}
                <div className="group flex">
                    <div
                        className="w-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-lg hover:bg-gradient-to-b hover:from-gray-900 transition-colors duration-1000 bg-opacity-20 hover:bg-opacity-30 rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
                        <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
                            <h3 className="text-xl md:text-2xl font-semibold text-white">OPERATING SYSTEM</h3>
                        </div>
                        <div className="flex flex-row gap-4">
                            {[{img: windows, name: "Windows"}, {img: linux, name: "Linux"}].map((item, index) => (
                                <span key={index}
                                      className="w-20 h-20 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex flex-col items-center justify-center rounded-md shadow-md hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-yellow-400 cursor-pointer duration-300 shadow-lg hover:shadow-xl">
                                    <img className="w-10 h-8" src={item.img} alt={item.name}/>
                                    <p className="text-xs mt-1">{item.name}</p>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
