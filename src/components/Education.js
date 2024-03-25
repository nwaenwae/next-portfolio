import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Details from "./Details";

const educationVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 2,
      delay: 1,
    },
  },
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <>
      <motion.h2
        className="font-bold text-5xl mb-16 w-full text-center"
        variants={educationVariant}
        initial="hidden"
        animate="visible"
      >
        Education
      </motion.h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-7 top-0 w-[4px] h-full bg-primaryLight origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            title="B.Sc. (Hons:) Computing"
            time="December 2019 - November 2020"
            address="University of Greenwich, UK"
            work="Accomplish B.Sc. Degree with First Class Honours (GPA 4 out of 4). Relevant courses included Human Computer Interaction and Design, Enterprise Web Software Development, Requirements Management, and Mobile Application Design and Development."
          />
          <Details
            title="Level 5 Diploma in Computing (L5DC)"
            time="September 2018 - September 2019"
            address="NCC Education, UK"
            work="Achieve Third in the World Award (2020) with a distinction mark of 84% in Level 5 Diploma in Computing of NCC Education. Deep learn Agile Development, Database Design and Development, Dynamic Websites, Information Systems Analysis, Network Security and Cryptography, Professional Issues in IT, and Analysis, Design and Implementation."
          />
          <Details
            title="Level 4 Diploma in Computing (L5DC)"
            time="September 2017 - September 2018"
            address="NCC Education, UK"
            work="Complete Level 4 Diploma in Computing (NCC Education) with a distinction mark of 79%. Completed coursework in Skills for Computing, Computer Systems, Computer Networks, Designing and Developing a Website, Databases, Software Development Techniques, and Office Solutions Development."
          />
        </ul>
      </div>
    </>
  );
};

export default Education;
