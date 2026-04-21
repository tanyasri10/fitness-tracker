// router/AppRouter.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Activities from "../pages/Activities";
import ActivityDetail from "../pages/ActivityDetail";
import Filter from "../pages/Filter";
import Stats from "../pages/Stats";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/activities" element={<Activities />} />
      <Route path="/activities/:id" element={<ActivityDetail />} />
      <Route path="/filter" element={<Filter />} />
      <Route path="/stats" element={<Stats />} />
      <Route path="/" element={<Activities />} />
    </Routes>
  );
};

export default AppRouter;
