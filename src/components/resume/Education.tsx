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
          <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          </div>
          <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
                title="BSc in Computer Science"
                subTitle="University of DVI (2006 - 2010)"
                result="3.90/4"
                des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
            />
            <ResumeCard
                title="AS - Science & Information"
                subTitle="SuperKing College (2001 - 2005)"
                result="4.75/5"
                des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
            />
            <ResumeCard
                title="Secondary School Education"
                subTitle="Kingstar Secondary School (1998 - 2000)"
                result="5.00/5"
                des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
            />
          </div>
        </div>

        {/* part Two */}
      </motion.div>
  );
};

export default Education;
