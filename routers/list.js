const { Router } = require("express");
const Item = require("../models").item;
const List = require("../models").list;

const router = new Router();

// router.get("/:listId", (req, res) => {
//   console.log(req.params.listId);
//   res.send({ status: "ok" });
// });

router.get("/:listId", async (req, res, next) => {
  try {
    const list = await List.findByPk(req.params.listId, {
      include: [Item],
      order: [["updatedAt", "DESC"]],
    });

    console.log(list.dataValues);

    res.send({ list });
  } catch (error) {
    next(error);
  }
  return null;
});

router.post("/", async (req, res, next) => {});

router.delete("/", async (req, res, next) => {});

router.put("/", async (req, res, next) => {});

module.exports = router;
