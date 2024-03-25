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
      <Layout>
        <div>
          <h2 className="font-bold text-5xl mb-16 w-full text-center">
            Experience
          </h2>
          <div ref={ref} className="w-[75%] mx-auto relative">
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
                work="Work in a team responsible on developing new features for existing new projects and new projects (mainly for the frontend part). Hand-on experience with web application and mobile application including admin system, learning investment platform, company portfolio, broadcast messaging, point transaction and redemption, push notification and so on."
              />
              <Details
                title="Web Developer"
                companyLink="https://www.agga.io/"
                company="AGGA.IO Co., Ltd"
                time="January 2022 - August 2022"
                address="Yangon, Myanmar"
                work="Work in a team responsible as a frontend developer for developing a Lab Management system (Hospital Laboratory). Convert the UI design into the responsive and interactive web application. Experience in producing barcode based on the patientId, integration with the barcode scanner, creating multi-step form and creating admin dashboard."
              />
              <Details
                title="Junior Web Developer"
                company="Seattle Consulting Myanmar Co., Ltd"
                time="December 2020 - August 2021"
                address="Yangon, Myanmar"
                work="After being a trainee in more than 5 OJT projects, be a permanent team member responsible for developing web application (either the fullstack web application development or only API backend development). Get familiarity with Clean Architecture Approach and Domain Driven Design Approach for designing and structuring the source code in a clean and organized way."
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
