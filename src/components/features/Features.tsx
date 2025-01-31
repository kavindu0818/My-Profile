// import React from "react";
import Title from "../layouts/Title";
import Card from "./Card.js";
import { featuresData } from "../../data/data";
const Features = () => {
  return (
      <section id="resume"
               className="w-full h-full flex flex-col lgl:flex-row items-center justify-between px-5 md:px-10 border-b border-white font-titleFont bg-[#191b1e] pb-15">

        <Title title="Features" des="What I Do"/>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
          {featuresData.map((item) => (
              <Card item={item} key={item.id}/>
          ))}
        </div>
      </section>
  );
};

export default Features;
