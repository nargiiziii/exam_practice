import React from "react";
import style from "./Card.module.scss";
import { IoMdStar } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addBasket } from "../../redux/features/basketSlice";

const Card = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className={style.card_area}>
        <img src={product.image} alt="" />
        <h4>{product.title}</h4>
        <p>
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
        </p>
        <p>{product.price}</p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(addBasket(product));
          }}
        >
          add basket
        </button>
      </div>
    </div>
  );
};

export default Card;
