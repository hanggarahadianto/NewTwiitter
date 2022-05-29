const express = require("express");
const router = express.Router();
const { comment } = require("../models");
const { validateToken } = require("../middleWares/authMiddleware");

router.get("/", async (req, res) => {
  let listOfComment = await comment.findAll({
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });
  res.json(listOfComment);
});

router.get("/:postId", async (req, res) => {
  const postId = req.params.postId;
  const detailComment = await comment.findAll({
    where: { postId: postId },
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });
  res.json(detailComment);
});

router.post("/", validateToken, async (req, res) => {
  try {
    const newComment = req.body;
    const name = req.user.name;
    newComment.name = name;
    await comment.create(newComment);
    res.json(newComment);
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

    await comment.destroy({
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

// router.put("/title", validateToken, async (req, res) => {
//   try {
//     const { newTitle, id } = req.body;
//     await link.update({ title: newTitle }, { where: { id: id } });
//     res.json(newTitle);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       status: "failed",
//       message: "Server Error",
//     });
//   }
// });

// router.put("/description", validateToken, async (req, res) => {
//   try {
//     const { newDescription, id } = req.body;
//     await link.update({ description: newDescription }, { where: { id: id } });
//     res.json(newDescription);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       status: "failed",
//       message: "Server Error",
//     });
//   }
// });

module.exports = router;
