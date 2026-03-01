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
        className="font-bold text-3xl sm:text-5xl mb-10 md:mb-16 w-full text-center"
        variants={educationVariant}
        initial="hidden"
        animate="visible"
      >
        Education
      </motion.h2>
      <div ref={ref} className="w-full md:w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-7 top-0 w-[4px] h-full bg-primaryLight origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            title="B.Sc. (Hons:) Computing"
            time="December 2019 - November 2020"
            address="University of Greenwich, UK"
            work="Graduated with First Class Honours (GPA 4.0/4.0). Relevant coursework included Human-Computer Interaction and Design, Enterprise Web Software Development, Mobile Application Design and Development, and Requirements Management."
          />
          <Details
            title="Level 5 Diploma in Computing (L5DC)"
            time="September 2018 - September 2019"
            address="NCC Education, UK"
            work="Awarded Third in the World (2020) with a distinction mark of 84%. Coursework covered Agile Development, Database Design and Development, Dynamic Websites, Information Systems Analysis, Network Security and Cryptography, and Analysis, Design and Implementation."
          />
          <Details
            title="Level 4 Diploma in Computing (L5DC)"
            time="September 2017 - September 2018"
            address="NCC Education, UK"
            work="Completed with a distinction mark of 79%. Coursework spanned Skills for Computing, Computer Systems, Computer Networks, Designing and Developing a Website, Databases, Software Development Techniques, and Office Solutions Development."
          />
        </ul>
      </div>
    </>
  );
};

export default Education;
