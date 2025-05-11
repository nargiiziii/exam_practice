import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProdDetail = () => {
  const products = useSelector((state) => state.products.allProducts);

  const { _id } = useParams();

  const findProduct = products.find((prod) => prod.id == _id);

  return (
    <div style={{ display: "flex", gap: "20px", padding:"90px", justifyContent:"center"}}>
      <img
        src="https://preview.colorlib.com/theme/shop/img/l5.jpg.webp"
        alt=""
      />

      <div className="prod_info" style={{display:"flex", flexDirection:"column", gap:"10px"}}>
        <h2>{findProduct.title}</h2>
        <p>{findProduct.desc}</p>
        <p>{findProduct.price}</p>
      </div>
    </div>
  );
};

export default ProdDetail;
