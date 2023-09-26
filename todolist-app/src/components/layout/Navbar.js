import React from "react";
import Link from "next/link";
import classes from "./Navbar.module.css";

const NavBar = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>My Todo List </div>
      <nav>
        <ul>
          <li>
            <Link href="/">Add Todo</Link>
          </li>
          <li>
            <Link href="/completeTodos">Completed Todo List</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
