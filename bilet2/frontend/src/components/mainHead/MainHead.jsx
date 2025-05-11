import React from "react";
import MainBtn from "../mainBtn/MainBtn";
import style from "./MainHead.module.scss";

const MainHead = () => {
  return (
    <div className={style.main}>
      <div className={style.main_head}>
        <h1>Shop With Us</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
          alias veniam natus, cupiditate distinctio autem, eum debitis
          repudiandae pariatur odit, ut nobis rem exercitationem voluptates
          harum ab quod. Earum, ipsa.
        </p>

        <div className={style.btns}>
          <MainBtn text="shop now" />
          <MainBtn text="club membership" />
        </div>
      </div>
    </div>
  );
};

export default MainHead;
