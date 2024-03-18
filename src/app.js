import express from "express";
import cors from "cors";
import { connectDB } from "./config/connectDB.js";
import router from "./routes/index.js";
const app = express();
console.log(process.env.DB_URI);
app.use(express.json());
app.use(cors());
connectDB(process.env.DB_URI);

app.use("/api", router);

app.listen(process.env.PORT, () => {
  console.log("app listening on port " + process.env.PORT);
});
