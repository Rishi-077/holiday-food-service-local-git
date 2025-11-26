import { Route, Routes } from "react-router-dom";
import FamilyStyleCatering from "./family-style-catering/family-style-catering";
import BoxedMeal from "./boxed-meal/boxed-meal";
import EventCaters from "./event-caters/event-cates";
import EmployeeSnacks from "./employee-snacks/employee-snacks";

function Solution() {
  return (
    <Routes>
      <Route path="/family-style-catering" element={<FamilyStyleCatering />} />
      <Route path="/boxed-meal" element={<BoxedMeal />} />
      <Route path="/event-caters" element={<EventCaters />} />
      <Route path="/employee-snacks" element={<EmployeeSnacks />} />
      {/* <Route path="/corporate-food-service" element={<FamilyStyleCatering />} /> */}
    </Routes>
  );
}

export default Solution;
