import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../context";
import { privateRoutes, publicRoutes } from "../router/router";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);
  if (isLoading) {
    return <Loader />;
  }

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route, index) => (
        <Route
          key={route.path}
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
          key={route.path}
          element={route.element}
          path={route.path}
          exact={route.exact}
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
