import React from "react";
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router/router";

const AppRouter = () => {
  const isAuth = true;

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route, index) => (
        <Route
          key={index}
          element={route.element}
          path={route.path}
          exact={route.exact}
        />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route, index) => (
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
