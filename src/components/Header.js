import Image from "next/image";
import Link from "next/link";
import Social from "./Social";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <Link href="/">
            <Image
              src="/images/logo.png"
              width={150}
              height={50}
              alt="logo"
              className="pb-2"
            />
          </Link>
          <Social />
        </div>
      </div>
    </header>
  );
};

export default Header;
