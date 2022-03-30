import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";
import MyButton from "../button/MyButton";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };
  return (
    <div className={classes.navbar}>
      {isAuth && <MyButton onClick={logout}>Sign out</MyButton>}
      <div className={classes.navbar__links}>
        <Link to="/posts">
          <MyButton>Posts</MyButton>
        </Link>
        <Link to="/about">
          <MyButton>About</MyButton>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
