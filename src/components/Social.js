import Link from "next/link";
import { RiLinkedinBoxFill, RiGithubFill, RiLineFill } from "react-icons/ri";

const Social = () => {
  return (
    <div className="flex items-center gap-x-5 text-xl xl:pr-10">
      <Link
        href="https://www.linkedin.com/in/nwae-nandar-aung"
        className="text-[#0077b5] hover:text-primary transition-all duration-300"
      >
        <RiLinkedinBoxFill size={36} />
      </Link>
      <Link
        href="https://github.com/NwaeNwae"
        className="hover:text-primary transition-all duration-300"
      >
        <RiGithubFill size={36} />
      </Link>
      <Link
        href="https://line.me/ti/p/7-3F98NRwB"
        className="text-[#06c755] hover:text-primary transition-all duration-300"
      >
        <RiLineFill size={36} />
      </Link>
    </div>
  );
};

export default Social;
