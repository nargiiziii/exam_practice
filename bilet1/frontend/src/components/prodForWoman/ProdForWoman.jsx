import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, searchProduct, sortByHighToLow, sortByLowToHigh } from "../../redux/features/productSlice";
import ProdCard from "../../components/prodCard/ProdCard";
import style from "./ProdForWoman.module.css";

const ProdForWoman = () => {
  const products = useSelector((state) => state.products.allProducts);
  const dispatch = useDispatch();

  console.log(products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <div className={style.sort}>
        <button onClick={()=> dispatch(sortByHighToLow())}>high to low</button>
        <button onClick={()=> dispatch(sortByLowToHigh())}>low to high</button>
        <input type="search" name="" placeholder="search..." id="" onChange={(e)=> dispatch(searchProduct(e.target.value))}/>
      </div>

      <div className="container">
        <div className={style.cards}>
          {products &&
            products.map((product) => {
              return <ProdCard key={product._id} product={product} />;
            })}
        </div>
      </div>
    </>
  );
};

export default ProdForWoman;
