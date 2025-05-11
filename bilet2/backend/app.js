import express from "express"
import "dotenv/config"
import "./src/db/dbConnection.js"
import cors from "cors"
import productRouter from "./src/routes/productRoute.js";

const port = process.env.PORT || 3001;
const app = express()


app.use(cors())
app.use(express.json());
app.use("/api/products2", productRouter)

app.post("/", (req, res)=> {
    res.send("helloooo")
})

app.listen((port), ()=> {
    console.log(`server is run ${`http://localhost:${port}`}`);
})