const { request } = require("http");
const https = require("https");

const getDef = (word) => {
  try {
    const req = https.get(
      `https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=08bfd710-d86c-4b99-8779-50b333f935ca`,
      (res) => {
        let body = "";

        res.on("data", (data) => {
          body += data.toString();
        });

        res.on("end", () => {
          let wordDEF = JSON.parse(body);
          console.log(wordDEF[0].shortdef);
        });
      }
    );

    req.on("error", (err) => {
      console.error(err.message);
    });
  } catch (error) {
    console.log(error);
  }
};

const query = process.argv.slice(2);
query.forEach(getDef);
