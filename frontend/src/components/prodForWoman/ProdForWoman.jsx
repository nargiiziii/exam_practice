import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/features/productSlice";
import ProdCard from "../../components/prodCard/ProdCard";
import style from "./ProdForWoman.module.css"


const ProdForWoman = () => {
  const products = useSelector((state) => state.products.allProducts);
  const dispatch = useDispatch();

  console.log(products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="container">
      <div className={style.cards}>
        {products &&
          products.map((product) => {
          return <ProdCard key={product._id} product={product} />;
          })}
      </div>
    </div>
  );
};

export default ProdForWoman;
