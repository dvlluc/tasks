import { Redirect } from "../components/utils/redirect";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

export const privateRoutes = [
  { path: "/posts", element: <Posts />, exact: true },
  { path: "/*", element: <Redirect to={"/posts"} />, exact: false },
  { path: "/about", element: <About />, exact: true },
  { path: "/posts/:id", element: <PostIdPage />, exact: true },
  { path: "*", element: <ErrorPage />, exact: true },
];

export const publicRoutes = [
  { path: "/login", element: <Login />, exact: true },
  { path: "*", element: <Redirect to={"/login"} />, exact: true },
];