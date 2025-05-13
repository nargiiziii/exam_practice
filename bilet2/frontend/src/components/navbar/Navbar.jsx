import React, { useState } from "react";
import Logo from "../logo/Logo";
import Navlist from "../navlist/Navlist";
import Wrapper from "../wrapper/Wrapper";
import style from "./Navbar.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [open, setOpen] = useState();

  return (
    <div className={style.navbar}>
      <Logo />
      <div className={style.nav_right}>
        <Navlist />
        <Wrapper />
      </div>
      <div className={style.nav_right_res}>
        <GiHamburgerMenu size={25} onClick={() => setOpen(!open)} />
      </div>
      {open && <Navlist />}
    </div>
  );
};

export default Navbar;
