import React from 'react'
import { Link } from 'react-router-dom'
import style from "./Navlist.module.css"

const Navlist = () => {
  return (
    <ul className={style.navlist}>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/about"}>About</Link></li>
        <li><Link to={"/contact"}>Contact</Link></li>
        <li><Link to={"/admin"}>Admin</Link></li>
    </ul>
  )
}

export default Navlist