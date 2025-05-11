import React from "react";
import style from "./ProdCard.module.css";
import { useDispatch } from "react-redux";
import { addBasket } from "../../redux/features/basketSlice";
import { useNavigate } from "react-router-dom";

const ProdCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  return (
    <div className={style.card} onClick={()=> navigate(`./prodDetail/:${product._id}`)}>
      <div className={style.card_body}>
        <img
          src="https://preview.colorlib.com/theme/shop/img/l5.jpg.webp"
          alt={product.title}
          className={style.image}
        />
        <p className={style.title}>{product.title}</p>
        <span className={style.price}>${product.price}</span>
      </div>
      <button
        className={style.button}
        onClick={(e) => {
          e.stopPropagation();
          dispatch(addBasket(product));
        }}
      >
        add to cart
      </button>
    </div>
  );
};

export default ProdCard;
