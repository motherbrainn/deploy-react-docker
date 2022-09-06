const express = require("express");
const path = require("path");

const app = express();
const port = process.env?.PORT ?? 4000;
const env = process.env.NODE_ENV;

// send static client files here when in prod
env === "production" &&
  app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("/example-endpoint", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
