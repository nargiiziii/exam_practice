import React from "react";
import NavList from "../navList/NavList";
import Logo from "../logo/Logo";
import Wrapper from "../wrapper/Wrapper";
import style from "./Navbar.module.scss";

import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={style.navbar}>
      <Logo />
      <div className={style.right_area}>
        <NavList />
        <Wrapper />
      </div>
      <div className={style.burger}>
        {open && <NavList />}
        <GiHamburgerMenu size={25} onClick={() => setOpen(!open)} />
      </div>
    </div>
  );
};

export default Navbar;
