import React from "react";
import { Link } from "react-router-dom";
import MyButton from "../button/MyButton";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
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
