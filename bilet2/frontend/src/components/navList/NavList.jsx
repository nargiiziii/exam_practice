import React from 'react'
import { Link } from 'react-router-dom'
import style from "./Navlist.module.scss"

const Navlist = () => {
  return (
    <ul className={style.list}>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/products"}>Products</Link></li>
        <li><Link to={"/about"}>About</Link></li>
        <li><Link to={"/specials"}>Specials</Link></li>
        <li><Link to={"/admin"}>Admin</Link></li>
    </ul>
  )
}

export default Navlist