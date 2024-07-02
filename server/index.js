import express from "express";
import mongoose from "mongoose";
import Information from "./models/contact.model.js";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

await mongoose
  .connect(
    "mongodb+srv://gtuhm2004:gtuhm2004@cluster0.gavkzjw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log("Database Connectivity", err));

app.post("/addInfo", async (req, res) => {
  try {
    const addInfo = await Information.create(req.body);
    return res.status(200).json(addInfo);
  } catch (error) {
    console.log("Err while adding Contact Info", error);
  }
});

app.get("/getAll", async (req, res) => {
  try {
    const allInfo = await Information.find({});
    res.status(200).json(allInfo);
  } catch (error) {
    console.log("Error getting Info");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
