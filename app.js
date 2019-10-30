const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
// const router = require("./src/routes");

require("dotenv").config();

const app = express();
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use("/api", router);

app.get("/", (req, res) => {
  var fullUrl =
    req.protocol + "://" + req.get("host") + req.originalUrl + "api";

  res.status(200).send('<a href="' + fullUrl + '">' + fullUrl + "</a>");
});

const port = parseInt(process.env.PORT) || 3000;
app.set("port", port);

app.listen(port, () => {
  console.log(`App running on ${port}.`);
});
