import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../redux/features/productSlice";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();

  const products = useSelector((state) => state.products.allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const findProd = products.find((prod) => prod._id == id);

  return (
    <div style={{ backgroundColor: "lightpink" }}>
      <h1>{findProd.title}</h1>
      <h1>{findProd.price}</h1>
    </div>
  );
};

export default DetailPage;
