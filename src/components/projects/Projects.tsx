// import React from 'react'
import Title from '../layouts/Title.js'
import { projectOne, projecttwo,projectthree,projectfour,projectsix } from "../../assets/ProjectImage.ts";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
        <section id="resume"
          className="w-full h-full flex flex-col lgl:flex-row items-center justify-between px-5 md:px-10 border-b border-white font-titleFont bg-[#191b1e] pb-15">

      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Student Management System"

          des=" A desktop application to manage students, course fees, staff, attendance, and email using JavaFX, layered architecture, and MySQL."
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projecttwo}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectthree}
        />
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectfour}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectsix}
        />
        <ProjectsCard
          title="Library Management System"
          des="A desktop application to manage books, members, transactions, and reporting features efficiently. using JavaFx, Mysql, Hibernate ORM"
          src={projectthree}
        />
      </div>
    </section>
  );
}

export default Projects