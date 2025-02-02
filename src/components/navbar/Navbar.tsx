import { useState } from 'react';
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import  logo  from "../../assets/images/nav/navProfile.png"; // Ensure logo is imported correctly
import { navLinksdata } from '../../constants';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div
            className="w-full h-20 bg-[#191b1e] fixed top-0 left-0 z-50 flex justify-between items-center font-titleFont border-b border-gray-600 px-5 md:px-10"
        >

            {/* Logo Section */}
            <div>
                {/* Uncomment the img tag if you want to use the logo */}
                <img src={logo} alt="logo" className="w-32"/>

            </div>

            {/* Desktop Menu */}
            <div>
                <ul className="hidden md:inline-flex items-center gap-6 right-10 lg:gap-10">
                    {navLinksdata.map(({_id, title, link}) => (
                        <li
                            className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                            key={_id}
                        >
                            <Link
                                activeClass="active"
                                to={link}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Toggle */}
                <span
                    onClick={() => setShowMenu(!showMenu)}
                    className="text-xl md:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
                >
          <FiMenu/>
        </span>

                {/* Mobile Menu */}
                {showMenu && (
                    <div
                        className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
                        <div className="flex flex-col gap-8 py-2 relative">

                            {/* Mobile Logo and Description */}
                            <div>
                                <img className="w-32" src={logo} alt="logo"/>
                                <p className="text-sm text-gray-400 mt-2">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum soluta perspiciatis
                                    molestias enim cum repellat, magnam exercitationem distinctio aliquid nam.
                                </p>
                            </div>

                            {/* Mobile Navigation Links */}
                            <ul className="flex flex-col gap-4">
                                {navLinksdata.map((item) => (
                                    <li
                                        key={item._id}
                                        className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                                    >
                                        <Link
                                            onClick={() => setShowMenu(false)}
                                            activeClass="active"
                                            to={item.link}
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            {/* Social Media Links */}
                            <div className="flex flex-col gap-4">
                                <h2 className="text-base uppercase font-titleFont mb-4">
                                    Find me in
                                </h2>
                                <div className="flex gap-4">
                  <span className="bannerIcon">
                    <FaFacebookF/>
                  </span>
                                    <span className="bannerIcon">
                    <FaTwitter/>
                  </span>
                                    <span className="bannerIcon">
                    <FaLinkedinIn/>
                  </span>
                                </div>
                            </div>

                            {/* Close Menu Button */}
                            <span
                                onClick={() => setShowMenu(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
                            >
                <MdClose/>
              </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
