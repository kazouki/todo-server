const { Router } = require("express");
const Item = require("../models").item;
const List = require("../models").list;

const router = new Router();

router.get("/:listId", async (req, res, next) => {
  try {
    const list = await List.findByPk(req.params.listId, {
      include: [Item],
      order: [["updatedAt", "DESC"]],
    });
    res.send({ list });
  } catch (error) {
    next(error);
  }
  return null;
});

router.get("/", async (req, res, next) => {
  try {
    const lists = await List.findAll({
      include: [Item],
      order: [["updatedAt", "DESC"]],
    });
    res.send({ lists });
  } catch (error) {
    next(error);
  }
  return null;
});

router.post("/", async (req, res, next) => {});

router.delete("/", async (req, res, next) => {});

router.put("/", async (req, res, next) => {});

module.exports = router;
