import express from "express"
import { addProduct, deleteProduct, getProduct } from "../collections/productCollection.js"

let productRouter = express.Router()

productRouter.post("/", addProduct)
productRouter.get("/", getProduct)
productRouter.delete("/:id", deleteProduct)

export default productRouter