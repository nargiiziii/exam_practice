import express from "express"
import "dotenv/config"
import "./db/dbConnection.js"
import productRouter from "./routes/productRoute.js"
import cors from "cors"

const port = process.env.PORT || 4001
const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/products", productRouter)


app.post("/", (req, res) => {
    res.send("hellooo")
})

app.listen((port), () => {
    console.log(`sever is run ${`http://localhost:${port}`}`);
})