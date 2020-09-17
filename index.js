const express = require("express");
const loggerMiddleWare = require("morgan");
const corsMiddleWare = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(corsMiddleWare());
const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

const listRouter = require("./routers/list");
app.use("/lists", listRouter);

app.listen(6001, () => {
  console.log(`Listening on port: 6001`);
});
