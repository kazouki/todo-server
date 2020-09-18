const express = require("express");
const loggerMiddleWare = require("morgan");
const corsMiddleWare = require("cors");

const app = express();
const bodyParserMiddleWare = express.json();
app.use(corsMiddleWare());
app.use(bodyParserMiddleWare);

const listRouter = require("./routers/list");
const iconRouter = require("./routers/icon");
const itemsRouter = require("./routers/item");
app.use("/lists", listRouter);
app.use("/icon", iconRouter);
app.use("/items", itemsRouter);

app.listen(6001, () => {
  console.log(`Listening on port: 6001`);
});
