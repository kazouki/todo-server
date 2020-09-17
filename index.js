const express = require("express");
const loggerMiddleWare = require("morgan");
const corsMiddleWare = require("cors");

const app = express();
app.use(corsMiddleWare());

app.get("/list/:listId", (req, res) => {
  console.log(req.params.listId);
  res.send({ status: "ok" });
});

app.listen(6001, () => {
  console.log(`Listening on port: 6001`);
});
