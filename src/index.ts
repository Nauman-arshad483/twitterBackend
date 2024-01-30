import express from "express";
import userRoutes from "./routes/userRoute";
import tweetRoutes from "./routes/tweetRoutes";

const app = express();
app.use(express.json());
app.use("/user", userRoutes);
app.use("/tweet", tweetRoutes);

app.get("/", (req, res) => {
  res.send("hello world updated");
});
app.listen(3000, () => {
  console.log("server ready at localhost:3000");
});
