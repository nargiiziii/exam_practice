import product from "../models/productModel.js";

export const addProduct = async(req, res) => {
    try {
        let newProduct = new product(req.body)
        await newProduct.save()
       return res.status(201).send(newProduct) 
    } catch (error) {
        return res.status(500).send("server error")
    }
}

export const getProduct = async(req, res) => {
    try {
        const products = await product.find();
        res.status(200).send(products)
    } catch (error) {
        return res.status(500).send("server error")
    }
}


export const deleteProduct = async (req, res) => {
    const id = req.params.id
    try {
        const deletedProd = await product.findByIdAndDelete(id) ;
        res.status(200).send("product deletede", deletedProd)
    } catch (error) {
        return res.status(500).send("server error")
    }
}