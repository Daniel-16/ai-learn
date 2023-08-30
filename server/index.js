import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/user.routes.js";

dotenv.config();
const app = express();
//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use("/", router);

const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URI_PRODUCTION, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server started at ${port}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
