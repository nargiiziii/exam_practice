import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    desc: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { collection: "products2", timestamps: true }
);

const product = mongoose.model("products2", productSchema);

export default product