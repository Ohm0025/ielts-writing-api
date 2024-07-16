const fs = require("fs");

const dirname = __dirname;
const target = dirname.replace("services", "listOfQuestion");

const addingQuestion = (rawText) => {
  const fileArray = fs.readdirSync(target);
  fs.writeFileSync(target + "/" + (fileArray.length + 1) + ".txt", rawText, {
    encoding: "utf-8",
  });
};

module.exports = addingQuestion;
