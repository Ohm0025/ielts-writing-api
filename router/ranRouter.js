const express = require("express");
const ranQuestion = require("../services/randomQuestion");
const addingQuestion = require("../services/addingQuestion");
const deleteQuestion = require("../services/deleteQuestion");
const router = express.Router();

router.get("/ran_question", (req, res) => {
  const questionText = ranQuestion();
  res.status(200).json({ question: questionText });
});

router.post("/add_question", (req, res) => {
  const { rawText } = req.body;
  addingQuestion(rawText);
  res.status(201).json({ result: "add question success" });
});

router.get("/showListQuestion", (req, res) => {
  const questionList = [];
  res.status(200).json({ questionList });
});

router.delete("/del_question/:number", (req, res) => {
  const { number } = req.params;
  deleteQuestion(number);
  res.status(200).json({ result: "delete question success" });
});

module.exports = router;
