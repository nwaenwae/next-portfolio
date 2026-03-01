"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import Details from "@/components/Details";

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <main className="flex items-center justify-center w-full min-h-screen pt-28">
      <Layout className="pb-20 xl:pb-0">
        <div>
          <h2 className="font-bold text-3xl sm:text-5xl mb-10 md:mb-16 w-full text-center">
            Experience
          </h2>
          <div ref={ref} className="w-full md:w-[75%] mx-auto relative">
            <motion.div
              style={{ scaleY: scrollYProgress }}
              className="absolute left-7 top-0 w-[4px] h-full bg-primaryLight origin-top"
            />
            <ul className="w-full flex flex-col items-start justify-between ml-4">
              <Details
                title="Software Engineer"
                companyLink="https://www.codetism.com/"
                company="Codetism Co., Ltd"
                time="August 2022 - Present"
                address="Bangkok, Thailand"
                work="Developing and maintaining web and mobile applications across a range of client projects, with a focus on the frontend. Delivered features spanning admin dashboards, investment learning platforms, broadcast messaging, point transaction and redemption systems, and push notifications. Working primarily with Vue.js, Nuxt.js, and Flutter."
              />
              <Details
                title="Web Developer"
                companyLink="https://www.agga.io/"
                company="AGGA.IO Co., Ltd"
                time="January 2022 - August 2022"
                address="Yangon, Myanmar"
                work="Worked as a frontend developer on a Hospital Laboratory Management System, converting UI designs into responsive and interactive web interfaces. Implemented barcode generation based on patient IDs, integrated barcode scanner support, built multi-step forms, and developed the admin dashboard."
              />
              <Details
                title="Junior Web Developer"
                company="Seattle Consulting Myanmar Co., Ltd"
                time="December 2020 - August 2021"
                address="Yangon, Myanmar"
                work="Started as a trainee across 5+ OJT projects before joining as a permanent team member. Contributed to both full-stack web application development and API backend development. Gained solid grounding in Clean Architecture and Domain-Driven Design for writing well-structured, maintainable code."
              />
            </ul>
          </div>
        </div>
        <Skills />
      </Layout>
    </main>
  );
};

export default Experience;
