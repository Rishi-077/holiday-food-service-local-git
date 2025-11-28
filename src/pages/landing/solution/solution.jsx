import { Navigate, Route, Routes } from "react-router-dom";
import FamilyStyleCatering from "./family-style-catering/family-style-catering";
import BoxedMeal from "./boxed-meal/boxed-meal";
import EventCaters from "./event-caters/event-cates";
import EmployeeSnacks from "./employee-snacks/employee-snacks";
import ExecutiveDining from "./executive-dining/executive-dining";
import CorporateService from "./corporate-service/corporate-service";

function Solution() {
  return (
    <Routes>
      <Route path="/family-style-catering" element={<FamilyStyleCatering />} />
      <Route path="/boxed-meal" element={<BoxedMeal />} />
      <Route path="/event-caters" element={<EventCaters />} />
      <Route path="/employee-snacks" element={<EmployeeSnacks />} />
      <Route path="/executive-dining" element={<ExecutiveDining />} />
      <Route path="/corporate-food-service" element={<CorporateService />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default Solution;
