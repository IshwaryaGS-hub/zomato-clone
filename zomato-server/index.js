import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import router from "./router.js";
import cors from "cors";

const app = express();
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.listen(process.env.PORT || 4567);

mongoose
  .connect(
    "mongodb+srv://ishwaryagopinathan:9rVr51a3Aq6aUJch@cluster0.51orgwe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    { dbName: "zomato_clone" }
  )
  .then(() => {
    console.log("Server connected with MongoDB");
  });

app.use("/", router);
