import React from "react";
import { Route, Routes } from "react-router-dom";

function Solution() {
  return (
    <Routes>
      <Route
        path="/corporate-food-service"
        element={<div>Solution Page - Corporate food service</div>}
      />
    </Routes>
  );
}

export default Solution;
