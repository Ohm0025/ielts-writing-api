const fs = require("fs");

const dirname = __dirname;
const target = dirname.replace("services", "listOfQuestion");

const getAllQuestion = () => {
  const fileArray = fs.readdirSync(target);

  let arrayQuestion = [];

  fileArray.forEach((item) => {
    let text = fs.readFileSync(target + "/" + item, { encoding: "utf-8" });
    console.log(text);
    arrayQuestion.push(text);
  });

  return arrayQuestion;
};

module.exports = getAllQuestion;
