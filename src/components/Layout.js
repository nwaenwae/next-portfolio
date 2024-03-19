import Footer from "./Footer";

const Layout = ({ children, className }) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light ${className} mx-28`}
    >
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
