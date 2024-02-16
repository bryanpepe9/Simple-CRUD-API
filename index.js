import express from "express";
import mongoose from "mongoose";
import Product from "./models/product.model.js";
import productRoute from "./routes/product.route.js";

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database connection
mongoose
  .connect(
    "mongodb+srv://bryanpepe9:WDvpJEkyrv85GtQE@backenddb.tvwm85n.mongodb.net/Node-API?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to Database!");
  })
  .catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
  });

// routes
app.use("/api/products", productRoute);
app.get("/", (req, res) => {
  res.send("Hello from Node API Server!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
