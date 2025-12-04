// import { Navigate, Route, Routes, useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";
// import Home from "./home/home";
// import Footer from "./layouts/footer/footer";
// import About from "./about/about";
// import Contact from "./contact/contact";
// import Loader from "../../components/loading/loading";
// import Solution from "./solution/solution";

// function Landing() {
//   const location = useLocation();
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     let startTimeout = setTimeout(() => setLoading(true), 0);
//     let stopTimeout = setTimeout(() => setLoading(false), 400);

//     return () => {
//       clearTimeout(startTimeout);
//       clearTimeout(stopTimeout);
//     };
//   }, [location.pathname]);

//   return (
//     <>
//       {loading ? (
//         <Loader />
//       ) : (
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="contact-us" element={<Contact />} />
//           <Route path="solution/*" element={<Solution />} />
//           <Route path="*" element={<Navigate to="/" replace />} />
//         </Routes>
//       )}

//       <Footer />
//     </>
//   );
// }

// export default Landing;

import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import Footer from "./layouts/footer/footer";
import Loader from "../../components/loading/loading";

const Home = lazy(() => import("./home/home"));
const About = lazy(() => import("./about/about"));
const Contact = lazy(() => import("./contact/contact"));
const Solution = lazy(() => import("./solution/solution"));

function Landing() {
  const location = useLocation();
  const [pageLoading, setPageLoading] = useState(false);

  useEffect(() => {
    let startTimeout = setTimeout(() => setPageLoading(true), 0);
    let stopTimeout = setTimeout(() => setPageLoading(false), 500);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(stopTimeout);
    };
  }, [location.pathname]);
  return (
    <>
      {pageLoading && <Loader />}

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="solution/*" element={<Solution />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

export default Landing;
