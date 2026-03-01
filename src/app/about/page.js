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
                Hi, I&apos;m Nwae Nandar Aung — a Frontend Engineer with 5+
                years of professional experience building responsive, performant
                web and mobile applications. My core stack spans Vue.js,
                React.js, Flutter, and React Native, and I take pride in
                translating designs into clean, high-quality code that feels
                great to use.
              </p>
              <p className="font-medium mt-4 text-sm sm:text-base">
                I approach every project with user experience at the forefront
                — balancing visual polish with technical performance. Whether
                it&apos;s a campaign landing page, a cross-platform mobile app,
                or a complex web platform, I focus on writing maintainable code
                that scales.
              </p>
              <p className="font-medium my-4 text-sm sm:text-base">
                I&apos;m a lifelong learner who stays current with the evolving
                frontend landscape. I thrive in collaborative environments and
                find real satisfaction in contributing to products that make a
                meaningful difference to the people who use them.
              </p>
            </motion.div>
            <div className="col-span-1 md:col-span-2 flex flex-row md:flex-col justify-around md:justify-between gap-4 md:gap-0">
              <div className="flex flex-col items-center md:items-end justify-center">
                <span className="inline-block text-3xl sm:text-5xl font-bold text-primary">
                  <AnimatedNumbers value={5} />+
                </span>
                <h2 className="text-sm sm:text-xl font-medium capitalize text-dark/75 text-center md:text-right">
                  years of experience
                </h2>
              </div>
              <div className="flex flex-col items-center md:items-end justify-center">
                <span className="inline-block text-3xl sm:text-5xl font-bold text-primary">
                  <AnimatedNumbers value={20} />+
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
