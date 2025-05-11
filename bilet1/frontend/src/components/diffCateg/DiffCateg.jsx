import React from "react";
import style from "./DiffCateg.module.css";

const DiffCateg = () => {
  return (
    <div className={style.diff_categ}>
      <div className={style.text}>
        <h2 className={style.head_text}>Shop For Different Categories</h2>
        <p className={style.text}>Who are in extremely love with eco friendly system.</p>
      </div>
      <div className={style.images}>
        <div className={style.three_img}>
          <div className={style.two_image}>
            <img
              src="https://preview.colorlib.com/theme/shop/img/c1.jpg.webp"
              alt=""
              className={style.small_img}
            />
            <img
              src="https://preview.colorlib.com/theme/shop/img/c2.jpg.webp"
              alt=""
              className={style.small_img}
            />
          </div>
          <img
            src="https://preview.colorlib.com/theme/shop/img/c3.jpg.webp"
            alt=""
            className={style.wide_img}
          />
        </div>
        <img
          src="https://preview.colorlib.com/theme/shop/img/c4.jpg.webp"
          alt=""
          className={style.tall_img}
        />
      </div>
    </div>
  );
};

export default DiffCateg;
