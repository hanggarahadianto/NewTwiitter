require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

app.use(express.json());
app.use(cors());

const db = require("./models");

const userRouter = require("./routes/user");
app.use("/auth", userRouter);
const postRouter = require("./routes/post");
app.use("/post", postRouter);
const commentRouter = require("./routes/comment");
app.use("/comment", commentRouter);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

db.sequelize
  .sync()
  .then(() => {
    app.listen(process.env.PORT || 3001, () => {
      console.log("This server is running ... ");
    });
  })
  .catch((error) => {
    console.log(error);
  });
