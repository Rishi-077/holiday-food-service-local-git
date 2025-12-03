import { Navigate, Route, Routes } from "react-router-dom";
import Landing from "../pages/landing/landing";
import ScrollToTop from "../hooks/ScrollToTop";

function AppRoute() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/*" element={<Landing />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  );
}

export default AppRoute;
