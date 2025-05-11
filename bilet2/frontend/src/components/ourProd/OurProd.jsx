import React from "react";
import style from "./OurProd.module.scss";
import Card from "../card/Card";

const OurProd = () => {
  return (
    <div>
      <div className={style.text}>
        <p>POPULAR PRODUCTS</p>
        <h1>Our Products</h1>
        <p  className={style.head}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          hic explicabo animi odit error, veniam aut asperiores. Doloribus,
          quam! Neque rem ab officia excepturi possimus deserunt sit sed
          molestiae similique?
        </p>
      </div>

      <div className={style.prod_area}>

        <Card product="product"/>

      </div>
    </div>
  );
};

export default OurProd;
