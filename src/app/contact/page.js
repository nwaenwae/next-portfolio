"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Layout from "@/components/Layout";
import { RiLinkedinBoxFill, RiGithubFill, RiLineFill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";

const headingVariants = {
  hidden: { opacity: 0, y: "100vw" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, delay: 0.3 },
  },
};

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  },
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:nwaenandaraung509@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="flex items-center justify-center w-full min-h-screen pt-28">
      <Layout className="pb-20 xl:pb-0">
        <motion.h2
          className="text-3xl sm:text-5xl font-bold mb-10 md:mb-16"
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          Contact
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 pb-12">
          {/* Left — info */}
          <motion.div
            className="flex flex-col gap-6"
            variants={fadeIn(0.4)}
            initial="hidden"
            animate="visible"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-primary">
              Let&apos;s Work Together
            </h3>
            <p className="text-dark/70 leading-relaxed text-sm sm:text-base">
              I&apos;m always open to new opportunities, collaborations, or just
              a friendly chat about frontend development. Feel free to reach out
              through the form or any of the channels below.
            </p>

            <Link
              href="mailto:nwaenandaraung509@gmail.com"
              className="flex items-center gap-3 text-dark hover:text-primary transition-colors duration-200 w-fit"
            >
              <HiOutlineMail size={24} />
              <span className="text-sm sm:text-base font-medium">
                nwaenandaraung509@gmail.com
              </span>
            </Link>

            <div className="flex items-center gap-4 mt-2">
              <Link
                href="https://www.linkedin.com/in/nwae-nandar-aung"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0077b5] hover:text-primary transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <RiLinkedinBoxFill size={32} />
              </Link>
              <Link
                href="https://github.com/NwaeNwae"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark hover:text-primary transition-colors duration-200"
                aria-label="GitHub"
              >
                <RiGithubFill size={32} />
              </Link>
              <Link
                href="https://line.me/ti/p/7-3F98NRwB"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#06c755] hover:text-primary transition-colors duration-200"
                aria-label="Line"
              >
                <RiLineFill size={32} />
              </Link>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
            variants={fadeIn(0.5)}
            initial="hidden"
            animate="visible"
          >
            <div className="flex flex-col gap-1">
              <label
                htmlFor="name"
                className="text-sm font-medium text-dark/70"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="border border-dark/20 rounded-lg px-4 py-3 text-sm outline-none focus:border-primary transition-colors duration-200 bg-white"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className="text-sm font-medium text-dark/70"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="nwaenandaraung509@gmail.com"
                className="border border-dark/20 rounded-lg px-4 py-3 text-sm outline-none focus:border-primary transition-colors duration-200 bg-white"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="message"
                className="text-sm font-medium text-dark/70"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={form.message}
                onChange={handleChange}
                placeholder="What's on your mind?"
                className="border border-dark/20 rounded-lg px-4 py-3 text-sm outline-none focus:border-primary transition-colors duration-200 bg-white resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-2 self-start px-8 py-3 bg-dark text-light rounded-lg text-sm font-semibold hover:bg-primary transition-colors duration-200"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </Layout>
    </main>
  );
};

export default Contact;
