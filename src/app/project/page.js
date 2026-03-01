"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import { HiExternalLink } from "react-icons/hi";

const projects = [
  {
    id: 1,
    title: "AfterKlass",
    description:
      "A financial education platform designed for teenagers in Thailand, offering interactive content on money management, saving, and financial literacy to build smart habits from a young age.",
    tags: ["Vue.js", "Nuxt.js", "SCSS"],
    live: "https://www.afterklass.com/",
    image: "/images/projects/afterklass.png",
  },
  {
    id: 2,
    title: "Danone Care+",
    description:
      "A family health and wellness platform by Danone that lets parents track their child's growth and development, scan baby stool characteristics, and access personalised nutrition insights.",
    tags: ["Vue.js", "Nuxt.js", "Bootstrap"],
    live: "https://danonecareplus.com/th/",
    image: "/images/projects/danone-care-plus.png",
  },
  {
    id: 3,
    title: "Shiseido Ultimune",
    description:
      "A campaign landing page for Shiseido's ULTIMUNE Power Infusing Serum, allowing users to register as new members and claim an exclusive gift set as part of a limited promotional offer.",
    tags: ["Vue.js", "Nuxt.js", "Tailwind CSS"],
    live: "https://ultimune.shiseido.co.th/",
    image: "/images/projects/shiseido-ultimune.png",
  },
  {
    id: 4,
    title: "Codetism",
    description:
      "The corporate website for Codetism Co., Ltd., a software development company, showcasing their services, expertise, and technology solutions to prospective clients.",
    tags: ["Vue.js", "Nuxt.js", "Bootstrap"],
    live: "https://www.codetism.com/",
    image: "/images/projects/codetism.png",
  },
  {
    id: 5,
    title: "Beauty Connect",
    description:
      "A cross-platform Shiseido beauty community app available on both web and mobile, enabling user authentication, product sample management, and brand engagement through personalised beauty experiences.",
    tags: ["Flutter", "Firebase", "Provider"],
    live: "https://beautyconnect.shiseido.co.th/",
    image: "/images/projects/beauty-connect.png",
  },
  {
    id: 6,
    title: "KUIAS",
    description:
      "The official web portal for Kasetsart University's International Affairs division, providing information, resources, and services for international students, faculty, and academic programs.",
    tags: ["Grails", "Bootstrap"],
    live: "https://kuias.ku.ac.th/",
    image: "/images/projects/kuias.png",
  },
];

const headingVariants = {
  hidden: { opacity: 0, y: "100vw" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, delay: 0.3 },
  },
};

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="flex flex-col rounded-2xl overflow-hidden border border-dark/10 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="text-lg sm:text-xl font-bold">{project.title}</h3>
        <p className="text-sm text-dark/70 leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link */}
        <div className="flex items-center gap-4 pt-1">
          <Link
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark hover:text-primary transition-colors duration-200"
            aria-label="Visit project"
          >
            <HiExternalLink size={24} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <main className="flex items-center justify-center w-full min-h-screen pt-28">
      <Layout className="pb-20 xl:pb-0">
        <motion.h2
          className="text-3xl sm:text-5xl font-bold mb-10 md:mb-16"
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 pb-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Layout>
    </main>
  );
};

export default Projects;
