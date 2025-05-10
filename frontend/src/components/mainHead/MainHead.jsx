import React from "react";
import style from "./MainHead.module.css";

const MainHead = () => {
  return (
    <div className={style.main}>
      <img className={style.img}
        src="https://preview.colorlib.com/theme/shop/img/header-img.png.webp"
        alt=""
      />

      <div className={style.head_text}>
        <p>flat 75% OFF</p>
        <h2>It’s Happening this Season!</h2>
        <button>PURCHASE NOW</button>
      </div>
    </div>
  );
};

export default MainHead;
