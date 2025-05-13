import React from "react";
import style from "./MainHead.module.scss";

const MainHead = () => {
  return (
    // <div className={`container ${style.main_head}`}>
    <div className={style.main_head}>
      <div className="container">
        <div className={style.head_text}>
        <h1>Shop With Us</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
          odit officia ut ex aliquam eaque
        </p>
        <div className={style.buttons}>
          <button className={style.shop}>Shop Now</button>
          <button className={style.member}>Club Membership</button>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default MainHead;
