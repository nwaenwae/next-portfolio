import Footer from "./Footer";

const Layout = ({ children, className }) => {
  return (
    <div
      className={`w-full inline-block z-0 bg-light ${className} mx-4 sm:mx-8 md:mx-16 xl:mx-28`}
    >
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
