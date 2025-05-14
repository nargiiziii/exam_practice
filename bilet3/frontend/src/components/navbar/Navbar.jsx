import React from "react";
import style from "./Navbar.module.scss";
import Logo from "../logo/Logo";
import Navlist from "../navlist/Navlist";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <Logo />
      <Navlist />
    </div>
  );
};

export default Navbar;
