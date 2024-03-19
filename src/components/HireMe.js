"use client";
import Link from "next/link";
import { RectangleText } from "@/utils/svg";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
      <div className="w-48 h-auto flex items-center justify-center relative animate-spin-slow">
        <RectangleText />
        <Link
          href="mailto:nwaenandaraung509@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark"
        >
          Hire me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
