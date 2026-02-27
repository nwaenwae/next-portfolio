const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-sm sm:text-lg">
      <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <span> 2024 &copy; All Rights Reserved</span>
        <div className="flex items-center">
          Build with <span className="text-primary text-2xl px-1">&#9825;</span>{" "}
          <p>by Nwae Nandar Aung</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
