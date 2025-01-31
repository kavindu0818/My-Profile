import {  useState } from 'react'
import Title from '../layouts/Title.js';
import Education from './Education.js';
// import Skills from './Skills';
// import Achievement from './Achievement.js';
// import Experience from "./Experience.js"

const Resume = () => {
   const [educationData, setEducationData] = useState(true);
   // const [skillData, setSkillData] = useState(false);
   // const [experienceData, setExperienceData] = useState(false);
   // const [achievementData, setAchievementData] = useState(false);
  return (
    <section id="resume" className="w-full h-full flex flex-col lgl:flex-row items-center justify-between px-5 md:px-10 border-b border-black font-titleFont bg-gray-900">
      <div className="flex justify-center items-center text-center">
        <Title title="7+ YEARS OF EXPERIENCE" des="Education" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <li
            onClick={() =>
              setEducationData(true)
              // setSkillData(false) &
              // setExperienceData(false) &
              // setAchievementData(false)
            }
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
              </li>
          {/*</li>*/}
          {/*<li*/}
          {/*  onClick={() =>*/}
          {/*    setEducationData(false) &*/}
          {/*    setSkillData(true) &*/}
          {/*    setExperienceData(false) &*/}
          {/*    setAchievementData(false)*/}
          {/*  }*/}
          {/*  className={`${*/}
          {/*    skillData ? "border-designColor rounded-lg" : "border-transparent"*/}
          {/*  } resumeLi`}*/}
          {/*>*/}
          {/*  Professional Skills*/}
          {/*</li>*/}
          {/*<li*/}
          {/*  onClick={() =>*/}
          {/*    setEducationData(false) &*/}
          {/*    setSkillData(false) &*/}
          {/*    setExperienceData(true) &*/}
          {/*    setAchievementData(false)*/}
          {/*  }*/}
          {/*  className={`${*/}
          {/*    experienceData*/}
          {/*      ? "border-designColor rounded-lg"*/}
          {/*      : "border-transparent"*/}
          {/*  } resumeLi`}*/}
          {/*>*/}
          {/*  Experience*/}
          {/*</li>*/}
          {/*<li*/}
          {/*  onClick={() =>*/}
          {/*    setEducationData(false) &*/}
          {/*    setSkillData(false) &*/}
          {/*    setExperienceData(false) &*/}
          {/*    setAchievementData(true)*/}
          {/*  }*/}
          {/*  className={`${*/}
          {/*    achievementData*/}
          {/*      ? "border-designColor rounded-lg"*/}
          {/*      : "border-transparent"*/}
          {/*  } resumeLi`}*/}
          {/*>*/}
          {/*  Achievements*/}
          {/*</li>*/}
        </ul>
      </div>
      {educationData && <Education />}
      {/*{skillData && <Skills />}*/}
      {/*{achievementData && <Achievement />}*/}
      {/*{experienceData && <Experience />}*/}

    </section>
  );
}

export default Resume