import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT

// middlewares
app.use(express.json());

// routes
app.use("/", (req, res)=>{
  const date = new Date();
  const data = {
    email: "bensonate98@gmail.com",
    current_datetime: date.toISOString(),
    github_url: "jjggff"
  };

  res.status(200).json(data);
});

app.listen(PORT, ()=>{
  console.log(`Server running at port ${PORT}`);
})
