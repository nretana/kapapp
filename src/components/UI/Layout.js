import { useRef, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = (props) => {
  
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className={`main-content ${props !== null ? props.pageClass : ""}`}>
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
