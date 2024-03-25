import { motion, useScroll } from "framer-motion";

const LiIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });

  return (
    <figure className="absolute left-0 stroke-primaryLight">
      <svg width="75" height="75" viewBox="0 0 100 100" className="-rotate-90">
        <polygon
          points="0 40,40 80,80 40,40 0"
          className="stroke-primary stroke-1 fill-none"
        />
        <motion.polygon
          points="0 40,40 80,80 40,40 0"
          className="stroke-[5px] fill-light"
          style={{ pathLength: scrollYProgress }}
        />
        <polygon
          points="20 40,40 60,60 40,40 20"
          className="animate-pulse stroke-1 fill-primary"
        />
      </svg>
    </figure>
  );
};

export default LiIcon;
