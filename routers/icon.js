const { Router } = require("express");
const Item = require("../models").item;

const router = new Router();

router.post("/:itemId", async (req, res, next) => {
  //   console.log(req);
  try {
    const item = await Item.findByPk(req.params.itemId);
    console.log("icon worked");
    res.send({ item });
  } catch (error) {
    next(error);
  }
  return null;
});
router.delete("/", async (req, res, next) => {});

router.put("/", async (req, res, next) => {});

module.exports = router;
