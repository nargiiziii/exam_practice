import React from "react";
import style from "./NewProdMen.module.css";

const NewProdMen = () => {
  return (
    <div className={style.new_prod_men}>
      <div className={style.text}>
        <h2>New realeased Products for Men</h2>
        <p>Who are in extremely love with eco friendly system.</p>
      </div>

      <div className={style.cards}>
        <div className={style.card}>
          <img
            src="https://preview.colorlib.com/theme/shop/img/l1.jpg.webp"
            alt=""
            className={style.img}
          />
          <p className={style.name}>Long Sleeve shirt</p>
          <p className={style.price}>$150.00</p>
        </div>
        <div className={style.card}>
          <img
            src="https://preview.colorlib.com/theme/shop/img/l1.jpg.webp"
            alt=""
            className={style.img}
          />
          <p className={style.name}>Long Sleeve shirt</p>
          <p>$150.00</p>
        </div>
        <div className={style.card}>
          <img
            src="https://preview.colorlib.com/theme/shop/img/l1.jpg.webp"
            alt=""
            className={style.img}
          />
          <p className={style.name}>Long Sleeve shirt</p>
          <p>$150.00</p>
        </div>
        <div className={style.card}>
          <img
            src="https://preview.colorlib.com/theme/shop/img/l1.jpg.webp"
            alt=""
            className={style.img}
          />
          <p className={style.name}>Long Sleeve shirt</p>
          <p>$150.00</p>
        </div>
      </div>
    </div>
  );
};

export default NewProdMen;
