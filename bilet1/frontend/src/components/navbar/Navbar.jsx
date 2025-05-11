import React, { useState } from "react";
import Navlist from "../navlist/Navlist";
import Logo from "../logo/Logo";
import style from "./Navbar.module.css";
import Wrapper from "../wrapper/Wrapper";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={style.navbar}>
      <Logo />
      <div className={style.left_side}>
        <Navlist />
        <Wrapper />
      </div>
      <div
        className={style.burger}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <GiHamburgerMenu size={25} />

        {isOpen && (
          <div className="drop">
            <Navlist />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
