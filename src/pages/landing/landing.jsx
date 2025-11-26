import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./layouts/navbar/navbar";
import Home from "./home/home";
import Footer from "./layouts/footer/footer";
import About from "./about/about";
import Contact from "./contact/contact";
import ScrollToTop from "../../hooks/ScrollToTop";
import Loader from "../../components/loading/loading";
import Solution from "./solution/solution";

function Landing() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let startTimeout = setTimeout(() => setLoading(true), 0);
    let stopTimeout = setTimeout(() => setLoading(false), 400);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(stopTimeout);
    };
  }, [location.pathname]);
  
  return (
    <>
      <ScrollToTop />
      <Navbar />

      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="solution/*" element={<Solution />} />
        </Routes>
      )}

      <Footer />
    </>
  );
}

export default Landing;
