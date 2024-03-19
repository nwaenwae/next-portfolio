"use client";
import Link from "next/link";
import Image from "next/image";
import profilePic from "../../public/images/profile.png";
import useTypedDescription from "@/hooks/useTypedDescription";
import cn from "classnames";
import { FaLink } from "react-icons/fa";
import Layout from "@/components/Layout";
import HireMe from "@/components/HireMe";

const descriptionList = ["Nwae Nandar Aung", "a Frontend Developer"];
const Home = () => {
  const { typedDescription, phase, selectedDescription } =
    useTypedDescription(descriptionList);
  return (
    <main className="flex items-center text-dark w-full min-h-screen">
      <Layout className="pt-0">
        <div className="flex items-center justify-center w-full">
          <div className="w-1/2">
            <Image
              src={profilePic}
              alt="profile-pic"
              className="w-3/4 h-auto"
            />
          </div>
          <div className="w-1/2">
            <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
              <h1
                className={`inline-block text-dark font-bold text-4xl xl:text-5xl leading-loose`}
              >
                Hello, I&apos;m <br />
                <span
                  className={cn("text-primary ", {
                    ["end-cursor"]: phase != "Deleting",
                    ["blinking"]: phase === "Pausing",
                  })}
                  aria-label={selectedDescription}
                >
                  {typedDescription}
                </span>
              </h1>
            </div>
            <p className="my-4 text-base font-medium">
              As a skilled frontend developer, I am dedicated to be the bridge
              between web design and functionality, ensuring seamless user
              experiences and interactive interfaces.
            </p>
            <div className="flex items-center self-start mt-2">
              <Link
                href="/NWAE_NANDAR_AUNG_Curriculum_Vitae.pdf"
                target="_blank"
                className="flex items-center bg-primary text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-primary border-2 border-solid border-transparent hover:border-primary"
                download={true}
              >
                Resume
                <FaLink className="w-6 ml-1" />
              </Link>
              <Link
                href="mailto:nwaenandaraung509@gmail.com"
                className="ml-4 text-lg font-medium capitalize text-dark underline"
                target="_blank"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Layout>
      <HireMe />
    </main>
  );
};

export default Home;
