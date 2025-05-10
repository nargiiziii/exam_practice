import React from "react";
import style from "./ProdCard.module.css";

const ProdCard = ({ product }) => {
  return (
    <div className={style.card}>
      <div className={style.card_body}>
      <img
        src="https://preview.colorlib.com/theme/shop/img/l5.jpg.webp"
        alt={product.title}
        className={style.image}
      />
      <p className={style.title}>{product.title}</p>
      <span className={style.price}>${product.price}</span>
      </div>
      <button className={style.button}>add to cart</button>
    </div>
  );
};

export default ProdCard;
