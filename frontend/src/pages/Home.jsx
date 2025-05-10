import React from "react";
import MainHead from "../components/mainHead/MainHead";
import DiffCateg from "../components/diffCateg/DiffCateg";
import NewProdMen from "../components/newProdMen/NewProdMen";
import ProdForWoman from "../components/prodForWoman/ProdForWoman";

const Home = () => {


  return (
    <>
        <div>
            <MainHead/>
            <DiffCateg/>
            <NewProdMen/>
            <ProdForWoman/>
        </div>


    </>
  );
};

export default Home;
