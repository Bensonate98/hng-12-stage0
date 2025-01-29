import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app = express();
const PORT = process.env.PORT

// middlewares
app.use(cors());

// routes
app.use("/", (req, res)=>{
  const date = new Date();
  const data = {
    email: "bensonate98@gmail.com",
    current_datetime: date.toISOString(),
    github_url: "<https://github.com/Bensonate98/hng-12-stage0>"
  };

  res.status(200).json(data);
}); 

app.listen(PORT, ()=>{
  console.log(`Server running at port ${PORT}`);
})
