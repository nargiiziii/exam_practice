import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { collection: "products3", timestamps: true }
);

const product = mongoose.model("products3", productSchema);

export default product;
