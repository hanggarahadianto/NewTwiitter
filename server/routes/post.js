const express = require("express");
const router = express.Router();
const { post } = require("../models");
const { validateToken } = require("../middleWares/AuthMiddleware");
const { uploadFile } = require("../middleWares/uploadFile");

router.get("/", async (req, res) => {
  let listOfPost = await post.findAll({
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });
  res.json(listOfPost);
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const detailPost = await post.findOne({
      where: { id },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.send(detailPost);
  } catch {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Server Error",
    });
  }
});

router.post("/", uploadFile("image"), async (req, res) => {
  try {
    const data = {
      caption: req.body.caption,
      username: req.body.username,
      image: req.file.path,
    };
    let createPost = await post.create(data);

    res.send({
      status: "Success",
      data: {
        createPost,
        image: "http://localhost:3001/uploads/" + createPost.image,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Server Error",
    });
  }
});

router.delete("/:id", validateToken, async (req, res) => {
  try {
    const { id } = req.params;

    await post.destroy({
      where: {
        id,
      },
    });

    res.send({
      status: "Success",
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
});

router.put("/title", validateToken, async (req, res) => {
  try {
    const { newTitle, id } = req.body;
    await link.update({ title: newTitle }, { where: { id: id } });
    res.json(newTitle);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Server Error",
    });
  }
});

router.put("/description", validateToken, async (req, res) => {
  try {
    const { newDescription, id } = req.body;
    await link.update({ description: newDescription }, { where: { id: id } });
    res.json(newDescription);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Server Error",
    });
  }
});

module.exports = router;
