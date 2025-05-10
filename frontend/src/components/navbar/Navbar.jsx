import React from 'react'
import Navlist from '../navlist/Navlist'
import Logo from '../logo/Logo'
import style from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div className={style.navbar}>
        <Logo/>
        <Navlist/>
    </div>
  )
}

export default Navbar