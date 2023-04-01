import React from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "../utils/constants";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
    </Routes>
  );
};

export default AppRouter;
