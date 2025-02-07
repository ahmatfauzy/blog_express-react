import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());


app.get("/", (req, res) => {
  res.send({
    message: "api is working"
  });
});

app.listen(PORT, () => {
  console.log(`SERVER RUNNING IN PORT ${PORT}`);
});
