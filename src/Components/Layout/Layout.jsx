import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className="max-w-lg m-auto px-6 pt-3 sm:pt-20 flex flex-col min-h-screen">
        <Header />
        {children}
        <Footer />
      </div>
      <div className="background-wrapper bg-[#171823]">
        <div className="background"></div>
      </div>
    </>
  );
};

export default Layout;
