import React from 'react'
import style from "./NavList.module.scss"
import {Link} from "react-router-dom"

const NavList = () => {
  return (
    <ul className={style.list}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/specials">Specials</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/admin">Admin</Link></li>
    </ul>
  )
}

export default NavList