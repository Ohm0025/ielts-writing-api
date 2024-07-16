const fs = require("fs");

const dirname = __dirname;
const target = dirname.replace("services", "listOfQuestion");

const ranQuestion = () => {
  const fileArray = fs.readdirSync(target);

  let ran_index = Math.floor(Math.random() * fileArray.length);

  const ranFileTxt = fs.readFileSync(target + "/" + fileArray[ran_index], {
    encoding: "utf-8",
  });

  return ranFileTxt;
};

module.exports = ranQuestion;
