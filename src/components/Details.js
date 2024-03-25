import { useRef } from "react";
import { motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ title, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl pb-1">
          {title}&nbsp;
          {company && (
            <a
              href={companyLink}
              target="_blank"
              className="text-primary capitalize"
            >
              @{company}
            </a>
          )}
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full pt-4">{work}</p>
      </motion.div>
    </li>
  );
};

export default Details;
