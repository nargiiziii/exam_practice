import React from 'react'
import { IoCart } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Wrapper = () => {

  const navigate = useNavigate()
  const basket = useSelector((state) => state.basket.allBasket);

  const basketLength = basket.reduce((acc, prod) => acc + prod.count, 0)


  return (
    <div>
        <IoCart size={25} onClick={()=> navigate("/basket")} style={{cursor:"pointer"}}/>
          <sup>{basketLength}</sup>
    </div>
  )
}

export default Wrapper