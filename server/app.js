const express = require("express");
const app = express();
const port = 3000;

app.get("/fruits", (req, res) => {
  res.send({
    items: ["apple", "orange", "tomato"],
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
