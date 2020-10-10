const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000 || 5000;
const path = require("path");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.post("/add", (req, res) => {
  const { num1, num2 } = req.body;
  if (typeof num1 == "string" || typeof num2 == "string") {
    res.send("invalid Data type");
  }

  if (num1 > 1000000 || num2 > 1000000) {
    res.send("overflow");
  }
  const ans = num1 + num2;
  res.send(`The sum of given two number is ${ans}`);
});

app.post("/sub", (req, res) => {
  const { num1, num2 } = req.body;
  if (typeof num1 == "string" || typeof num2 == "string") {
    res.send("invalid Data type");
  }

  const ans = num1 - num2;
  res.send(`The difference of given two number is ${ans}`);
});

app.post("/multiply", (req, res) => {
  const { num1, num2 } = req.body;
  if (typeof num1 == "string" || typeof num2 == "string") {
    res.send("invalid Data type");
  }

  if (num1 > 1000000 || num2 > 1000000) {
    res.send("overflow");
  }

  const ans = num1 * num2;
  res.send(`The product of given numbers is ${ans}`);
});

app.post("/division", (req, res) => {
  const { num1, num2 } = req.body;
  if (typeof num1 == "string" || typeof num2 == "string") {
    res.send("invalid Data type");
  }

  if (num2 == 0) {
    res.send("Cannot divide by zero");
  }

  const ans = num1 / num2;
  res.send(`The division of given numbers is ${ans}`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
