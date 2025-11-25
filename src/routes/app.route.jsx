import { Navigate, Route, Routes } from "react-router-dom";
import Landing from "../pages/landing/landing";

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/*" element={<Landing />} />
      <Route path="/" element={<Navigate replace to="/" />} />
      {/* <Route path="/*" element={<PageRoute />} /> */}
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}

export default AppRoute;
