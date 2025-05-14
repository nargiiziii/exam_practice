import express from "express";
import "dotenv/config";
import "./src/db/dbConnection.js";
import cors from "cors";
import productRouter from "./src/routes/productRouter.js";

const port = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/products3", productRouter);

app.post("/", (req, res) => {
  return res.send("hellooo");
});

app.listen(port, () => {
  console.log(`server is run ${`http://localhost:${port}`}`);
});
