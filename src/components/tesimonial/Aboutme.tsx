// import { useState } from "react";
// import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
// import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from "../layouts/Title";
import { testimonialOne, quote } from "../../assets";

const Aboutme = () => {

  return (
      <section id="testimonial"
               className="w-full h-[700px] flex flex-col lgl:flex-row items-center justify-between px-5 md:px-10 border-b border-white font-titleFont  bg-[#191b1e] pb-10"
      >
        <div className="flex justify-center items-center text-center">
          <Title title=" I Am " des="About me" />
        </div>
        <div className="max-w-6xl mx-auto">
          {/* Slider */}
          {/*<Slider {...settings}>*/}
            <div className="w-full">
              <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
                {/* Left Section */}
                <div
                    className="w-100 h-[500px] lgl:w-[35%] bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col justify-center gap-8 border border-gray-700">
                  <img
                      className="h-96 md:h-96 lgl:h-96 rounded-lg object-cover"
                      src={testimonialOne}
                      alt="testimonialOne"
                  />
                  <div className="w-full flex flex-col justify-end">
                    <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                      Bound - Trolola
                    </p>
                    <h3 className="text-2xl font-bold">Kavindu Madhuranga</h3>
                    <p className="text-base tracking-wide text-yellow-400">
                      Software Engineer
                    </p>
                  </div>
                </div>
                {/* Right Section */}
                <div className="w-5/8 lgl:w-[50%] h-[500px] left-105 -top-125 relative flex flex-col justify-between">
                  <img className="w-30 lgl:w-32" src={quote} alt="quote"/>
                  <div
                      className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                    <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                      <div>

                        <div className="text-yellow-500 flex gap-1">
                          <RiStarFill/>
                          <RiStarFill/>
                          <RiStarFill/>
                          <RiStarFill/>
                          <RiStarFill/>
                        </div>
                        {/*<h3 className="text-xl lgl:text-2xl font-medium tracking-wide">*/}
                        {/*  Name: Kavindu Madhuranga Wijerathna <br/>*/}
                        {/*  Date of Birthday : 2001 Auguest 18<br/>*/}
                        {/*  Address : No 159 Sigirimulla Dambulla <br/>*/}
                        {/*  Email : kavindumaduranga184@gmail.com <br/>*/}
                        {/*  Phone : +94774257738*/}
                        {/*</h3>*/}
                        <p className="text-base text-gray-400 mt-3">

                          Hello! I'm Kavindu Madhuranga Wijerathna, a passionate software engineering student at IJSE
                          (INSTUTITUE OF SOFTWARE ENGEINEERING). Course ID GDSE 67 from Sri Lanka. I am deeply
                          fascinated by the world of technology and its endless possibilities. My journey into software
                          engineering began with a curiosity to understand how things work behind the screen,
                          and since then, there has been no turning back
                        </p>
                      </div>
                    </div>
                    <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                      Name: Kavindu Madhuranga Wijerathna <br/>
                      Date of Birthday : 2001 Auguest 18 <br/>
                      Address : No 159 Sigirimulla Dambulla <br/>
                      Email : kavindumaduranga184@gmail.com <br/>
                      Phone : +94774257738
                    </p>
                  </div>
                </div>
              </div>
            </div>
          {/*</Slider>*/}
        </div>
      </section>
  );
};

export default Aboutme;
