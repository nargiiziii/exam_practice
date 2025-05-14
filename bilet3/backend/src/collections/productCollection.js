import product from "../models/productModel.js";

export const addProduct = async (req, res) => {
  try {
    let newProd = product(req.body);
    await newProd.save();
    return res.status(201).send(newProd);
  } catch (error) {
    return res.status(500).send("server error");
  }
};

export const getProduct = async (req, res) => {
  try {
    let products = await product.find();
    return res.status(209).send(products);
  } catch (error) {
    return res.status(500).send("server error");
  }
};

export const deleteProduct = async (req, res) => {
  let id = req.params;
  try {
    let deletedProd = product.findByIdAndDelete(id);
    return res.status(201).send("product deleted", deletedProd);
  } catch (error) {
    return res.status(500).send("server error");
  }
};
