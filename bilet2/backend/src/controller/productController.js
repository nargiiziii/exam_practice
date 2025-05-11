import product from "../models/productModel.js";

export const addProduct = async (req, res) => {
  try {
    let newProd = new product(req.body);
    await newProd.save();
    return res.status(201).send(newProd);
  } catch (error) {
    return res.status(500).send("server error");
  }
};


export const getProduct = async (req, res) => {
    try {
        let products = await product.find();
        return res.status(200).send(products)
    } catch (error) {
      return res.status(500).send("server error");
    }
  };


  export const deleteProduct = async (req, res) => {
    let id = req.params.id
    try {
      let deletedProd = await product.findByIdAndDelete(id);
      return res.status(200).send("prod deleted", deletedProd)
    } catch (error) {
      return res.status(500).send("server error");
    }
  };