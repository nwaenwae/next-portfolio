"use client";

import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-primary text-light py-3 px-6 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.25 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.0 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-5xl mt-32 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight mb-56">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Tech
          <br /> Stacks
        </motion.div>
        <Skill name="HTML" x="-9vw" y="-6vw" />
        <Skill name="CSS" x="6vw" y="-7vw" />
        <Skill name="Dart" x="14vw" y="1vw" />
        <Skill name="PHP" x="-13vw" y="3vw" />
        <Skill name="JavaScript" x="2vw" y="7vw" />
        <Skill name="React.js" x="-12vw" y="14vw" />
        <Skill name="Vue.js" x="14vw" y="13vw" />
        <Skill name="Flutter" x="26vw" y="0vw" />
        <Skill name="Bootstrap" x="15vw" y="-13vw" />
        <Skill name="Tailwind CSS" x="-12vw" y="-13vw" />
        <Skill name="Laravel" x="-27vw" y="2vw" />
        <Skill name="Next.js" x="-30vw" y="13vw" />
        <Skill name="TypeScript" x="5vw" y="20vw" />
        <Skill name="Nuxt.js" x="33vw" y="10vw" />
        <Skill name="Firebase" x="32vw" y="-10vw" />
        <Skill name="Git" x="0vw" y="-20vw" />
        <Skill name="AWS" x="-28vw" y="-13vw" />
      </div>
    </>
  );
};

export default Skills;
