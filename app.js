const express = require("express");
const ran_question = require("./router/ranRouter");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).send("hello api");
});

app.use(ran_question);

app.listen(8080, () => console.log("server run on port 8080"));
