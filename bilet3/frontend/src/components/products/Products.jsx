import React from "react";
import style from "./Products.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../redux/features/productSlice";
import Card from "../card/Card";

const Products = () => {
  const products = useSelector((state) => state.products.allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);


  return (
    <div className={style.products}>
      {products &&
        products.map((prod) => <Card key={prod._id} product={prod} />)}
    </div>
  );
};

export default Products;
