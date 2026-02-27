"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import Layout from "@/components/Layout";
import Education from "@/components/Education";

const aboutVariants = {
  hidden: {
    opacity: 0,
    y: "100vw",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      delay: 0.5,
    },
  },
  exit: {
    y: "-100vw",
  },
};

const paragraphVariants = {
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

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const About = () => {
  return (
    <>
      <main className="flex items-center justify-center w-full min-h-screen pt-28">
        <Layout className="pb-20 xl:pb-0">
          <motion.div
            className="text-3xl sm:text-5xl font-bold mb-10 md:mb-16"
            variants={aboutVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            About me?
          </motion.div>
          <div className="grid w-full grid-cols-1 md:grid-cols-8 gap-8 md:gap-16 pb-10">
            <motion.div
              className="col-span-1 md:col-span-6 flex flex-col items-start justify-start"
              variants={paragraphVariants}
              initial="hidden"
              animate="visible"
            >
              <p className="font-medium text-sm sm:text-base">
                Hi, I am Nwae Nandar Aung. I am a passionate Frontend Developer
                with 3 years of professional experience. Designing and
                developing user-friendly solutions is not only my job but also
                my passion. I have a deep understanding of JavaScript and its
                modern libraries and frameworks, namely React.js and Vue.js. I
                am proficient in translating designs and wireframes into
                high-quality code, and writing application interface code via
                JavaScript and JavaScript libraries with focus on performance
                optimization.
              </p>
              <p className="font-medium mt-4 text-sm sm:text-base">
                While keeping user experience and interaction at the core of my
                designing process, I always follow the latest trends and details
                in frontend web technologies to enhance usability and
                functionality.
              </p>
              <p className="font-medium mt-4 text-sm sm:text-base">
                While keeping user experience and interaction at the core of my
                designing process, I always follow the latest trends and details
                in frontend web technologies to enhance usability and
                functionality.
              </p>
              <p className="font-medium my-4 text-sm sm:text-base">
                A lifelong learner, I always keep myself updated with the latest
                industry trends and actively participate in relevant
                communities. This journey is about constant growth, learning,
                and positive contributions to the teams and products I work
                with.
              </p>
            </motion.div>
            <div className="col-span-1 md:col-span-2 flex flex-row md:flex-col justify-around md:justify-between gap-4 md:gap-0">
              <div className="flex flex-col items-center md:items-end justify-center">
                <span className="inline-block text-3xl sm:text-5xl font-bold text-primary">
                  <AnimatedNumbers value={3} />+
                </span>
                <h2 className="text-sm sm:text-xl font-medium capitalize text-dark/75 text-center md:text-right">
                  years of experience
                </h2>
              </div>
              <div className="flex flex-col items-center md:items-end justify-center">
                <span className="inline-block text-3xl sm:text-5xl font-bold text-primary">
                  <AnimatedNumbers value={15} />+
                </span>
                <h2 className="text-sm sm:text-xl font-medium capitalize text-dark/75 text-center md:text-right">
                  project contributed
                </h2>
              </div>
              <div className="flex flex-col items-center md:items-end justify-center">
                <span className="inline-block text-3xl sm:text-5xl font-bold text-primary">
                  <AnimatedNumbers value={8} />+
                </span>
                <h2 className="text-sm sm:text-xl font-medium capitalize text-dark/75 text-center md:text-right">
                  learning time/week
                </h2>
              </div>
            </div>
          </div>
          <div className="mb-24 md:mb-56 mt-12 md:mt-24">
            <Education />
          </div>
        </Layout>
      </main>
    </>
  );
};

export default About;
