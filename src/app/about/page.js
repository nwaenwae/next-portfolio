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
        <Layout>
          <motion.div
            className="text-5xl font-bold mb-16"
            variants={aboutVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            About me?
          </motion.div>
          <div className="grid w-full grid-cols-8 gap-16 pb-10">
            <motion.div
              className="col-span-6 flex flex-col items-start justify-start"
              variants={paragraphVariants}
              initial="hidden"
              animate="visible"
            >
              <p className="font-medium">
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
              <p className="font-medium mt-4">
                While keeping user experience and interaction at the core of my
                designing process, I always follow the latest trends and details
                in frontend web technologies to enhance usability and
                functionality.
              </p>
              <p className="font-medium mt-4">
                While keeping user experience and interaction at the core of my
                designing process, I always follow the latest trends and details
                in frontend web technologies to enhance usability and
                functionality.
              </p>
              <p className="font-medium my-4">
                A lifelong learner, I always keep myself updated with the latest
                industry trends and actively participate in relevant
                communities. This journey is about constant growth, learning,
                and positive contributions to the teams and products I work
                with.
              </p>
            </motion.div>
            <div className="col-span-2 flex flex-col justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-5xl font-bold text-primary">
                  <AnimatedNumbers value={3} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  years of experience
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-5xl font-bold text-primary">
                  <AnimatedNumbers value={15} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 ">
                  project contributed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-5xl font-bold text-primary">
                  <AnimatedNumbers value={8} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  learning time/week
                </h2>
              </div>
            </div>
          </div>
          <div className="mb-56 mt-24">
            <Education />
          </div>
        </Layout>
      </main>
    </>
  );
};

export default About;
