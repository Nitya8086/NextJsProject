import React from "react";

import classes from "./Layout.module.css";
import NavBar from "./Navbar";

const Layout = (props) => {
  return (
    <div>
      <NavBar />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
