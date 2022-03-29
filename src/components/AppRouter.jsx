import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../router/router";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={index}
          element={route.element}
          path={route.path}
          exact={route.exact}
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
