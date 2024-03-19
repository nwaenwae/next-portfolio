import Image from "next/image";
import logo2 from "../../public/images/logo-2.png";

import Link from "next/link";
import Social from "./Social";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center pt-5 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center mx-10">
          <Link href="/">
            <Image
              src={logo2}
              width={80}
              height={80}
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
