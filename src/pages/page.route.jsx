import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./landing/landing";

function PageRoute() {
  return (
    <Routes>
      <Route path="/*" element={<Landing />} />
    </Routes>
  );
}

export default PageRoute;
