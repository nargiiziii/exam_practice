import React from 'react'
import {Link} from "react-router-dom"

const Navlist = () => {
  return (
    <div style={{display:"flex", gap:"20px"}}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/admin">Admin</Link></li>
        <li><Link to="/basket">Basket</Link></li>
    </div>
  )
}

export default Navlist