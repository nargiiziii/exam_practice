import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/features/productSlice";

const Home = () => {
  const products = useSelector((state)=> state.products.allProducts);
  const dispatch = useDispatch();

  console.log(products);
  
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <div>Home</div>
      {/* <div>
        {products && products.map((product)=> {
            product.title
        })}
      </div> */}
    </>
  );
};

export default Home;
