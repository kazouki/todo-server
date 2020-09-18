const { Router } = require("express");
const Item = require("../models").item;

const router = new Router();

router.post("/", async (req, res, next) => {
  const { title, listId } = req.body;
  if (title && listId) {
    try {
      const item = await Item.create({
        title,
        listId,
      });
      res.send({ item });
    } catch (error) {
      next(error);
    }
  }
  return null;
});

router.delete("/:itemId", async (req, res, next) => {
  const itemId = req.params.itemId;
  if (itemId) {
    try {
      const item = await Item.findByPk(itemId);
      if (item) {
        const deleted = await item.destroy();
      }
    } catch (error) {
      next(error);
    }
  }
  return null;
});

router.put("/", async (req, res, next) => {});

module.exports = router;
