// Education.js (or .tsx if using TypeScript)
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';  // Import ResumeCard component

const Education = () => {
  return (
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
      >
        {/* part one */}
        <div>
          <div className="py-6 lgl:py-12 font-titleFont flex flex-col  gap-4">
          </div>
            <div
                className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] sticky border-l-black border-opacity-30 flex flex-col gap-10 left-96">
              {/* Content here */}
            <ResumeCard
                title="Graduate Diploma in Software Engineering"
                subTitle="Institute of Software Engineering - IJSE (2023 - 2025)"
                result="3.90/4"
                des="I am pursuing a Graduate Diploma in Software Engineering at the Institute of Software Engineering (IJSE) (2023–2025), specializing in Java as the main programming language. My studies include hands-on experience through assignments, in-class tests, module exams, and practical exams, equipping me with strong problem-solving and software development skills."
            />
            <ResumeCard
                title="G.C.E Advanced Level"
                subTitle=" Physical Science Stream (2021)"
                result="4.75/5"
                des="In 2021, I completed my Advanced Level exam in the Physics stream, studying Combined Mathematics, Physics, and Chemistry. These subjects enhanced my problem-solving, analytical, and scientific skills, providing a strong foundation in calculus, mechanics, electromagnetism, and chemistry for further studies in engineering, technology, or scientific research."
            />
            <ResumeCard
                title="G.C.E Ordinary Level"
                subTitle="2017"
                result="5.00/5"
                des="I completed my G.C.E. Ordinary Level examination in 2017 at Dambulla Central College, successfully facing nine subjects. This education provided me with a strong academic foundation, enhancing my knowledge in key subjects while developing critical thinking, problem-solving, and analytical skills essential for higher studies and future career growth."
            />
          </div>
        </div>

        {/* part Two */}
      </motion.div>
  );
};

export default Education;
