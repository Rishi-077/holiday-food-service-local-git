import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Landing from "./landing/landing";

function PageRoute() {
  return (
    <Routes>
      <Route path="/*" element={<Landing />} />
      <Route path="*" element={<Navigate to="/*" replace />} />
    </Routes>
  );
}

export default PageRoute;
