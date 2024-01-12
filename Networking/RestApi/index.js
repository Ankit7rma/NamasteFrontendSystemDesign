import express from "express";

const app = express();

const PORT = 3000;

app.all("/", (req, res) => {
  console.log(req);
  console.log(res);
  res.send("I am Up here");
});

app.listen(PORT, () => {
  console.log(`Server is Running at port ${PORT}`);
});
