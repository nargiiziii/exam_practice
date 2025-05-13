import React, { useEffect } from "react";
import style from "./OurProd.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/features/productSlice";
import Card from "../card/Card";

const OurProd = () => {
  const products = useSelector((state) => state.products.allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="container">
    <div className={style.our_prod}>
      <div className={style.head_text}>
        <p>POPULAR PRODUCTS</p>
        <h2>Our Products</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          culpa sequi illo fuga fugiat nulla eligendi quisquam cum obcaecati,
        </p>
      </div>

      <div className={style.products}>
        {products &&
          products.map((product) => (
            <Card key={product._id} product={product} />
          ))}
      </div>
    </div>
    </div>
  );
};

export default OurProd;
