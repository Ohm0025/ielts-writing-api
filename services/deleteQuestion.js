const fs = require("fs");

const dirname = __dirname;
const target = dirname.replace("services", "listOfQuestion");

const deleteQuestion = (number) => {
  let path = target + "/" + number + ".txt";
  fs.unlinkSync(path);
};

module.exports = deleteQuestion;
