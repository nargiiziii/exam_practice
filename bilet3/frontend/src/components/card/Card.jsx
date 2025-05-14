import React from 'react'
import {useNavigate} from "react-router-dom"

const Card = ({product}) => {

    const navigate = useNavigate()

  return (
    <div style={{backgroundColor:"lightblue", margin:"10px"}} onClick={()=> navigate(`/${product._id}`)}>
        <h1>{product.title}</h1>
        <h1>{product.price}</h1>
    </div>
  )
}

export default Card